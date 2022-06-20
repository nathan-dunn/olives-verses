import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  VStack,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ReactAudioPlayer from 'react-audio-player';
import { verses } from './data';
const header = `Olive's Bible Verses`;

const Line = ({ text, quotes, style = {} }) =>
  (quotes ? '"' + text + '"' : text).split('\n').map((line, index) => (
    <Text key={index} {...style}>
      {line.trim()}
    </Text>
  ));

const Verse = ({ verse }) => {
  const { title, text, audio } = verse;

  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      border="1px solid lightgray"
      borderRadius="5px"
      p="20px"
      m="20px"
    >
      <Box p="10px">
        <Line
          text={text}
          quotes
          style={{ align: 'left', fontStyle: 'italic' }}
        />
        <Text align="right">{`- ${title}`}</Text>
      </Box>
      <ReactAudioPlayer
        src={audio}
        autoPlay={false}
        controls={true}
        style={{ margin: '10px', marginTop: '30px' }}
      />
    </Flex>
  );
};

const Verses = ({ verses }) => (
  <Box>
    {verses.map((verse, index) => (
      <Verse key={index} verse={verse} />
    ))}
  </Box>
);

const Header = ({ header }) => (
  <Box>
    <Line
      text={header}
      quotes={false}
      style={{
        align: 'center',
        fontSize: '40px',
        fontFamily: `'Homemade Apple', cursive`,
      }}
    />
  </Box>
);

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Header header={header} />
            <Verses verses={verses} />
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
