import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';

const isMobile = window.matchMedia(
  'only screen and (max-width: 760px)'
).matches;

export default function Header({ image, colorScheme, onClick }) {
  const { appText } = colorScheme;

  return (
    <Flex flexDirection="row" justify="space-around" align="center" w="100%">
      <Image
        src={image}
        boxSize="80px"
        objectFit="contain"
        cursor="pointer"
        onClick={onClick}
        color={appText}
      />
      <Flex direction="column">
        <Text
          fontSize="4xl"
          fontFamily={`'Homemade Apple', cursive`}
          color={appText}
          align="left"
          fontWeight="400"
        >
          {"Olive's"}
        </Text>
        <Text
          fontSize="4xl"
          fontFamily={`'Homemade Apple', cursive`}
          color={appText}
          align="left"
          fontWeight="400"
        >
          {'Bible Verses'}
        </Text>
      </Flex>
    </Flex>
  );
}
