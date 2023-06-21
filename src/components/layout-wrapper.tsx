import { BoxProps, styled } from 'styled-system/jsx';

export const LayoutWrapper = (props: BoxProps) => (
  <styled.section display="flex" flexDir="column" w="90%" maxW="1000px" mx="auto" {...props} />
);
