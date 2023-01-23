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
  semanticTokens: {
    colors: {
      'nav-bg': {
        _light: 'rgba(255, 255, 255, 0.7)',
        _dark: 'rgba(26, 32, 44, 0.8)',
      },
      github: {
        _light: '#171515',
        _dark: 'gray.100',
      },
      lightGray: {
        _light: 'gray.100',
        _dark: 'gray.700',
      },
      darkGray: {
        _light: 'gray.600',
        _dark: 'gray.400',
      },
    },
  },
  components: {
    Divider: dividerTheme,
  },
});
