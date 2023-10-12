import React, { useState } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Verses from './Verses';
import { colors, header, verses } from '../data/index.js';

const isMobile = window.matchMedia(
  'only screen and (max-width: 760px)'
).matches;

export default function App() {
  const storedColor = Number(localStorage.getItem('@bibleColor'));
  const [colorIndex, setColorIndex] = useState(storedColor || 0);

  const toggleColors = () => {
    const nextColorIndex =
      colorIndex === colors.length - 1 ? 0 : colorIndex + 1;
    localStorage.setItem('@bibleColor', nextColorIndex);
    setColorIndex(nextColorIndex);

    toast.clearWaitingQueue();
    toast(`Color theme ${colorIndex + 1} of ${colors.length}`, {
      style: {
        whiteSpace: 'pre',
        backgroundColor: colors[nextColorIndex][0],
        color: colors[nextColorIndex][1],
        height: 5,
        textAlign: 'center',
      },
    });
  };

  return (
    <Flex
      textAlign="center"
      fontSize="xl"
      alignItems="center"
      justifyContent="center"
      bg="black"
    >
      <VStack spacing={8} w="90%" maxW="650px" p="10px">
        <ToastContainer
          position={isMobile ? 'top-right' : 'top-center'}
          limit={1}
          autoClose={100}
          hideProgressBar={false}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          rtl={false}
          newestOnTop
          style={{
            width: isMobile ? '100%' : '630px',
            backgroundColor: colors[colorIndex],
          }}
        />
        <Header header={header} onClick={toggleColors} />
        <Verses verses={verses} color={colors[colorIndex]} />
      </VStack>
    </Flex>
  );
}
