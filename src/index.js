import ReactDOM from 'react-dom';
import React from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import { theme } from './styles';

ReactDOM.render(
  <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </>,
  document.getElementById('root')
);
