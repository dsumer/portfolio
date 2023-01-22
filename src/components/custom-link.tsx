import { Box, forwardRef, Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

export const CustomLink = forwardRef(
  ({ name, href, ...props }: Omit<LinkProps, 'children'> & { name: string; href: string }, ref) => (
    <Link
      as={NextLink}
      href={href}
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
  ),
);
