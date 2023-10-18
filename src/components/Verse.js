import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import Line from './Line';

export default function Verse({ verse, colorScheme }) {
  const { verseBG, verseText } = colorScheme;

  const storedCheckedList = JSON.parse(localStorage.getItem('@bibleChecked'));
  const isChecked =
    storedCheckedList && storedCheckedList.includes(verse.title);
  const [change, setChange] = useState(Symbol());

  const toggleCollapsed = e => {
    const storedCheckedList =
      JSON.parse(localStorage.getItem('@bibleChecked')) || [];
    const idx = storedCheckedList.indexOf(verse.title);
    const updated =
      idx > -1
        ? [
            ...storedCheckedList.slice(0, idx),
            ...storedCheckedList.slice(idx + 1),
          ]
        : [...storedCheckedList, verse.title];
    localStorage.setItem('@bibleChecked', JSON.stringify(updated));

    setChange(Symbol());
  };

  return (
    <Flex
      justify="center"
      border="1px solid lightgray"
      borderRadius="5px"
      p={3}
      mb="20px"
      bg={verseBG}
      cursor="pointer"
    >
      <Box>
        <Box>
          <Text fontWeight="500" onClick={toggleCollapsed} color={verseText}>
            {verse.title}
          </Text>
        </Box>
        {!isChecked && (
          <Box pt="4">
            <Box pt="0" pr="20px" pb="0" pl="30px">
              <Line
                text={verse.text}
                quotes
                style={{ align: 'left', fontStyle: 'italic', color: verseText }}
              />
            </Box>
            <ReactAudioPlayer
              src={verse.audio}
              autoPlay={false}
              controls={true}
              style={{
                margin: '10px',
                marginTop: '30px',
              }}
            />
          </Box>
        )}
      </Box>
    </Flex>
  );
}
