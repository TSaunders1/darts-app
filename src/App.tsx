import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import HomePage from './pages/HomePage';

const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};
const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <HomePage />
    </ChakraProvider>
  );
}

export default App;
