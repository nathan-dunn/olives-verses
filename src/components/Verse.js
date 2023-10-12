import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import ReactAudioPlayer from 'react-audio-player';
import Line from './Line';

export default function Verse({ verse, color }) {
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
      p="20px"
      mb="20px"
      bg={color[0]}
      color={color[1]}
      cursor="pointer"
    >
      <Box>
        <Box>
          <Text fontWeight="500" onClick={toggleCollapsed}>
            {verse.title}
          </Text>
        </Box>
        {!isChecked && (
          <Box pt="4">
            <Box pt="0" pr="20px" pb="0" pl="30px">
              <Line
                text={verse.text}
                quotes
                style={{ align: 'left', fontStyle: 'italic' }}
              />
            </Box>
            <ReactAudioPlayer
              src={verse.audio}
              autoPlay={false}
              controls={true}
              style={{ margin: '10px', marginTop: '30px' }}
            />
          </Box>
        )}
      </Box>
    </Flex>
  );
}
