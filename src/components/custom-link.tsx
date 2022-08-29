import { Box, forwardRef, Link, LinkProps } from '@chakra-ui/react';

export const CustomLink = forwardRef(({ name, ...props }: Omit<LinkProps, 'children'> & { name: string }, ref) => (
  <Link
    ref={ref}
    aria-label={name}
    pos="relative"
    fontWeight="semibold"
    _hover={{ textDecor: 'none' }}
    role="group"
    __focus={{ boxShadow: 'none' }}
    {...props}
  >
    {name}
    <Box
      aria-hidden="true"
      mt="-3px"
      mx="auto"
      transform="translateY(3px)"
      w="0%"
      h="3px"
      bg="gray.500"
      transition="width .2s"
      _groupHover={{ w: '100%' }}
      pointerEvents="none"
    />
  </Link>
));