import React, { useState } from 'react';
import { Box, ChakraProvider, Flex, Image, Text, VStack } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import { theme } from '../styles';
import { colors, header, verses } from '../data';

const isMobile = window.matchMedia('only screen and (max-width: 760px)').matches;

const Line = ({ text, quotes, style = {} }) =>
  (quotes ? '"' + text + '"' : text).split('\n').map((line, index) => (
    <Text key={index} {...style}>
      {line.trim()}
    </Text>
  ));

const Verse = ({ verse, color }) => {
  const storedCheckedList = JSON.parse(localStorage.getItem('@bibleChecked'));
  const isChecked = storedCheckedList && storedCheckedList.includes(verse.title);
  const [change, setChange] = useState(Symbol());

  const toggleCollapsed = e => {
    const storedCheckedList = JSON.parse(localStorage.getItem('@bibleChecked')) || [];
    const idx = storedCheckedList.indexOf(verse.title);
    const updated =
      idx > -1
        ? [...storedCheckedList.slice(0, idx), ...storedCheckedList.slice(idx + 1)]
        : [...storedCheckedList, verse.title];
    localStorage.setItem('@bibleChecked', JSON.stringify(updated));

    setChange(Symbol());
  };

  return (
    <Flex
      justify="center"
      border="1px solid lightgray"
      borderRadius="5px"
      p="20px"
      mb="20px"
      bg={color[0]}
      color={color[1]}
      cursor="pointer"
      onClick={toggleCollapsed}
    >
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

const Verses = ({ verses, color }) => {
  return (
    <Box align="center" w="100%">
      {verses.map((verse, index) => (
        <Verse key={index} verse={verse} color={color} />
      ))}
    </Box>
  );
};

const Header = ({ header, onClick }) => {
  return (
    <Flex
      flexDirection={isMobile ? 'column' : 'row'}
      justify="center"
      flex-wrap="wrap"
      mt="40px"
      mb="20px"
      align={isMobile ? 'center' : 'flex-end'}
      w="100%"
    >
      <Image
        src={require('../assets/book-heart.png')}
        boxSize="50px"
        objectFit="contain"
        mr="20px"
        mb={isMobile ? '20px' : 'auto'}
        cursor="pointer"
        onClick={onClick}
      />

      <Text fontSize="4xl" fontFamily={`'Homemade Apple', cursive`} mb="-10px">
        {header}
      </Text>
    </Flex>
  );
};

const App = () => {
  const storedColor = Number(localStorage.getItem('@bibleColor'));
  const [colorIndex, setColorIndex] = useState(storedColor || 0);

  const toggleColors = () => {
    const nextColor = colorIndex === colors.length - 1 ? 0 : colorIndex + 1;
    localStorage.setItem('@bibleColor', nextColor);
    setColorIndex(nextColor);
  };

  return (
    <ChakraProvider theme={theme}>
      <Flex textAlign="center" fontSize="xl" alignItems="center" justifyContent="center">
        <VStack spacing={8} w="90%" maxW="650px" p="10px">
          <Header header={header} onClick={toggleColors} />
          <Verses verses={verses} color={colors[colorIndex]} />
        </VStack>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
