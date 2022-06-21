import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import App from './App';
import { theme } from './styles';
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </>
);
