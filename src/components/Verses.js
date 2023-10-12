import React from 'react';
import { Box } from '@chakra-ui/react';
import Verse from './Verse';

export default function Verses({ verses, color }) {
  return (
    <Box align="center" w="100%">
      {verses.map((verse, index) => (
        <Verse key={index} verse={verse} color={color} />
      ))}
    </Box>
  );
}
