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

  const [change, setChange] = useState(false);

  return (
    <Flex
      direction="row"
      justify="flex-start"
      align="flex-start"
      //
      border="1px solid lightgray"
      borderRadius="5px"
      p="20px"
      mb="20px"
      bg={theme.colors.bgLight}
    >
      <Checkbox
        defaultChecked={isChecked}
        // alignSelf="center"
        // width={isChecked ? null : '100%'}
        colorScheme="lightgray"
        // mt={isChecked ? null : '-10px'}
        // ml={isChecked ? null : '-20px'}
        size="lg"
        onChange={e => {
          setChange(!change);
          const storedCheckedList = JSON.parse(localStorage.getItem('@bibleChecked')) || [];
          const idx = storedCheckedList.indexOf(verse.title);
          const updated =
            idx > -1
              ? [...storedCheckedList.slice(0, idx), ...storedCheckedList.slice(idx + 1)]
              : [...storedCheckedList, verse.title];
          localStorage.setItem('@bibleChecked', JSON.stringify(updated));
        }}
      />
      {isChecked ? (
        <Box w="100%">
          <Text>{verse.title}</Text>
        </Box>
      ) : (
        <Box>
          <Box pt="0" pr="20px" pb="0" pl="30px">
            <Line text={verse.text} quotes style={{ align: 'left', fontStyle: 'italic' }} />
            <Text align="right">{`- ${verse.title}`}</Text>
          </Box>
          <ReactAudioPlayer
            src={verse.audio}
            autoPlay={false}
            controls={true}
            style={{ margin: '10px', marginTop: '30px' }}
          />
        </Box>
      )}
    </Flex>
  );
};

const Verses = ({ verses }) => {
  return (
    <Box align="center" w="100%">
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
        <VStack spacing={8} w="90%" maxW="650px" p="10px">
          <Header header={title} />
          <Verses verses={verses} />
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
