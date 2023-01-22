// theme.js

// 1. import `extendTheme` function
import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { dividerTheme } from './components/divider';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'system',
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
  components: {
    Divider: dividerTheme,
  },
});
