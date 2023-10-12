import React from 'react';
import { Flex, Image, Text } from '@chakra-ui/react';
import image from '../assets/images/book-heart.png';

const isMobile = window.matchMedia(
  'only screen and (max-width: 760px)'
).matches;

export default function Header({ header, onClick }) {
  return (
    <Flex
      flexDirection={isMobile ? 'column' : 'row'}
      justify="center"
      flex-wrap="wrap"
      mt="40px"
      align={isMobile ? 'center' : 'flex-end'}
      w="100%"
    >
      <Image
        src={image}
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
}
