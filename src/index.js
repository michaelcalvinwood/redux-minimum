import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
/*
 * Redux Provider
 */
import { Provider } from 'react-redux';
import store from './store/configStore';

/*
 * Chakra Provider Setup: https://pro.chakra-ui.com/guides/get-started
 */

import { ChakraProvider } from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme'
import { extendTheme, theme as baseTheme, ColorModeScript } from '@chakra-ui/react'
import '@fontsource/inter/variable.css'

/*
 * socket io
 */
import { io } from 'socket.io-client';
import * as socket from './socket';

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  proTheme,
)

socket.setupTheSocket(io, `https://node.pymnts.com:6400`, store);

// const intervalTimerId = setInterval(() => {
//   if (typeof io === 'undefined') return console.log('checking');
//   clearInterval(intervalTimerId);
//   setupTheSocket();
// }, 1000)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </Provider>

);


