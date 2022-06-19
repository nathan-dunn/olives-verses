import React from 'react';
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  Divider,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import ReactAudioPlayer from 'react-audio-player';

const verses = [
  {
    title: 'Deuteronomy 4:29',
    text: 'But if from there you seek the Lord your God, you will find him if you seek him with all your heart and with all your soul.',
    audio: require('./assets/deuteronomy_4_29.m4a'),
  },
  {
    title: 'Pease Porridge',
    text: `Pease porridge hot, pease porridge cold, Pease porridge in the pot, nine days old. Some like it hot, some like it cold, Some like it in the pot, nine days old.`,
    audio: require('./assets/pease_porridge.m4a'),
  },
];

const Verse = ({ verse }) => {
  const { title, text, audio } = verse;
  return (
    <Flex
      direction="column"
      justify="space-evenly"
      align="center"
      mb="20px"
      p="20px"
    >
      <Box p="10px">
        <Text align="left">{`"${text}"`}</Text>
        <Text align="right">{`- ${title}`}</Text>
      </Box>
      <ReactAudioPlayer
        src={audio}
        autoPlay={false}
        controls={true}
        style={{ margin: '20px' }}
      />
      <Divider />
    </Flex>
  );
};

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Text fontSize="40px" mb="20px">
              Olive's Bible Verses
            </Text>
            <Divider />
            <Box>
              {verses.map((verse, index) => (
                <Verse key={index} verse={verse} />
              ))}
            </Box>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
};

export default App;
