import React from 'react';
import { ChakraProvider, Box, Flex, Text, VStack, Grid, useColorMode } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
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
  const { colorMode } = useColorMode();
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
      bg={colorMode === 'dark' ? theme.colors.bgDark : theme.colors.bgLight}
    >
      <Box p="10px">
        <Line text={text} quotes style={{ align: 'left', fontStyle: 'italic' }} />
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
      <Flex textAlign="center" fontSize="xl" alignItems="center" justifyContent="center">
        <Grid minH="100vh" p={3}>
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
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
