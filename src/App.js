import React, { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  VStack,
  Grid,
  useColorMode,
  Checkbox,
} from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import { theme } from './styles';
import { title, verses } from './data';

const Line = ({ text, quotes, style = {} }) =>
  (quotes ? '"' + text + '"' : text).split('\n').map((line, index) => (
    <Text key={index} {...style}>
      {line.trim()}
    </Text>
  ));

const Verse = ({ verse }) => {
  const storedCheckedList = JSON.parse(localStorage.getItem('@bibleChecked'));
  const isChecked = storedCheckedList && storedCheckedList.includes(verse.title);
  console.log('>>isChecked:', verse.title, isChecked);

  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      border="1px solid lightgray"
      borderRadius="5px"
      p="20px"
      m="20px"
      bg={theme.colors.bgLight}
    >
      <Checkbox
        // checked={isChecked}
        defaultChecked={isChecked}
        alignSelf="flex-start"
        colorScheme="gray"
        mt="-10px"
        ml="-10px"
        onChange={e => {
          const storedCheckedList = JSON.parse(localStorage.getItem('@bibleChecked')) || [];
          const idx = storedCheckedList.indexOf(verse.title);
          const updated =
            idx > -1
              ? [...storedCheckedList.slice(0, idx), ...storedCheckedList.slice(idx + 1)]
              : [...storedCheckedList, verse.title];
          localStorage.setItem('@bibleChecked', JSON.stringify(updated));
        }}
      />
      <Box p="10px">
        <Line text={verse.text} quotes style={{ align: 'left', fontStyle: 'italic' }} />
        <Text align="right">{`- ${verse.title}`}</Text>
      </Box>
      <ReactAudioPlayer
        src={verse.audio}
        autoPlay={false}
        controls={true}
        style={{ margin: '10px', marginTop: '30px' }}
      />
    </Flex>
  );
};

const Verses = ({ verses }) => {
  return (
    <Box>
      {verses.map((verse, index) => (
        <Verse key={index} verse={verse} />
      ))}
    </Box>
  );
};

const Header = ({ header }) => (
  <Box mt="60px">
    <Line
      text={header}
      quotes={false}
      style={{ align: 'center', fontSize: '40px', fontFamily: `'Homemade Apple', cursive` }}
    />
  </Box>
);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex textAlign="center" fontSize="xl" alignItems="center" justifyContent="center">
        <Grid minH="100vh" p={3}>
          <VStack spacing={8} maxWidth="600px">
            <Header header={title} />
            <Verses verses={verses} />
          </VStack>
        </Grid>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
