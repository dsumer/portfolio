import { defineConfig, defineSemanticTokens } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  globalCss: {
    'html, body': {
      bg: {
        base: 'white',
        _dark: 'rgb(26, 32, 44)',
      },
    },
  },

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: defineSemanticTokens({
        colors: {
          navBg: {
            value: { base: 'rgba(255, 255, 255, 0.7)', _dark: 'rgba(26, 32, 44, 0.8)' },
          },
          github: {
            value: { base: '#171515', _dark: '{colors.gray.100}' },
          },
          lightGray: {
            value: {
              base: '{colors.gray.100}',
              _dark: '{colors.gray.700}',
            },
          },
          darkGray: {
            value: {
              base: '{colors.gray.600}',
              _dark: '{colors.gray.400}',
            },
          },
        },
      }),
      keyframes: {
        wavingHand: {
          '0%': { transform: 'rotate(0deg)' },
          '5%': {
            transform: 'rotate(14deg)',
          } /* The following five values can be played with to make the waving more or less extreme */,
          '10%': { transform: 'rotate(-8deg)' },
          '15%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(0deg)' } /* Reset for the last half to pause */,
          '100%': { transform: 'rotate(0deg)' },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: 'styled-system',

  jsxFramework: 'react',
});
