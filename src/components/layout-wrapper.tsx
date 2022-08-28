import { Flex, FlexProps } from '@chakra-ui/react';

export const LayoutWrapper = (props: FlexProps) => (
  <Flex as="section" direction="column" w="95%" maxW="900px" mx="auto" {...props} />
);
