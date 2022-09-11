// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react';

// 2. Add your color mode config
const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

// 3. extend the theme
export const theme = extendTheme({
  config,
  styles: {
    global: {
      html: {
        overflowX: 'hidden',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
        minH: '100vh',
      },
    },
  },
});
