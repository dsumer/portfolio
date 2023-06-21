import { styled } from 'styled-system/jsx';

export const WavingHand = () => (
  <styled.span
    display="inline-block"
    animationName="wavingHand"
    animationDuration="5s"
    animationDelay="2s"
    animationIterationCount="infinite"
    transformOrigin="70% 70%"
  >
    👋
  </styled.span>
);
