import React from 'react';
import { Box } from '@chakra-ui/react';
import Verse from './Verse';
import { verses } from '../data/index.js';

export default function Verses({ colorScheme }) {
  return (
    <Box align="center" w="100%">
      {verses.map((verse, index) => (
        <Verse key={index} verse={verse} colorScheme={colorScheme} />
      ))}
    </Box>
  );
}
