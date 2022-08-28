import { Box, keyframes } from '@chakra-ui/react';

const waveFrames = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '5%': {
    transform: 'rotate(14deg)',
  } /* The following five values can be played with to make the waving more or less extreme */,
  '10%': { transform: 'rotate(-8deg)' },
  '15%': { transform: 'rotate(14deg)' },
  '20%': { transform: 'rotate(0deg)' } /* Reset for the last half to pause */,
  '100%': { transform: 'rotate(0deg)' },
});

export const WavingHand = () => (
  <Box
    as="span"
    css={{
      display: 'inline-block',
      animationName: `${waveFrames}`,
      animationDuration: '5s',
      animationDelay: '2s',
      animationIterationCount: 'infinite',
      transformOrigin: '70% 70%',
    }}
  >
    👋
  </Box>
);
