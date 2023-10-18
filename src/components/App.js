import React, { useState } from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Verses from './Verses';
import { colorSchemes } from '../data/index.js';

const isMobile = window.matchMedia(
  'only screen and (max-width: 760px)'
).matches;

export default function App() {
  const storedColor = Number(localStorage.getItem('@bibleColor'));
  const [colorIndex, setColorIndex] = useState(storedColor || 0);
  const colorScheme = colorSchemes[colorIndex];
  const { pageBG, appBG, image } = colorScheme;

  const toggleColors = () => {
    const nextColorIndex =
      colorIndex === colorSchemes.length - 1 ? 0 : colorIndex + 1;
    localStorage.setItem('@bibleColor', nextColorIndex);
    setColorIndex(nextColorIndex);

    // toast.clearWaitingQueue();
    // toast(`Color theme ${colorIndex + 1} of ${colorSchemes.length}`, {
    //   style: {
    //     whiteSpace: 'pre',
    //     backgroundColor: colorSchemes[nextColorIndex][0],
    //     color: colorSchemes[nextColorIndex][1],
    //     height: 5,
    //     textAlign: 'center',
    //   },
    // });
  };

  return (
    <Flex
      textAlign="center"
      fontSize="xl"
      alignItems="center"
      justifyContent="center"
      bg={pageBG}
      pt={isMobile ? 0 : 50}
      h="100vh"
    >
      <VStack
        spacing={8}
        w={isMobile ? '100vw' : 400}
        h={isMobile ? '100vh' : '90vh'}
        py="10px"
        px="20px"
        overflow="scroll"
        bg={appBG}
        border={`2px solid ${colorScheme.borderColor}`}
        style={{ borderRadius: '5px' }}
      >
        <ToastContainer
          style={{
            width: isMobile ? '100vw' : 400,
            backgroundColor: appBG,
          }}
          position={isMobile ? 'top-right' : 'top-center'}
          limit={1}
          autoClose={100}
          hideProgressBar={false}
          pauseOnHover={false}
          pauseOnFocusLoss={false}
          rtl={false}
          newestOnTop
        />
        <Header
          colorScheme={colorScheme}
          image={image}
          onClick={toggleColors}
        />
        <Verses colorScheme={colorScheme} />
      </VStack>
    </Flex>
  );
}
