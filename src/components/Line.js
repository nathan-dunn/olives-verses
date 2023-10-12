import React from 'react';
import { Text } from '@chakra-ui/react';

export default function Line({ text, quotes, style = {} }) {
  return (quotes ? '"' + text + '"' : text).split('\n').map((line, index) => (
    <Text key={index} {...style}>
      {line.trim()}
    </Text>
  ));
}
