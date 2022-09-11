import { Flex, Link } from '@chakra-ui/react';

export function Footer() {
  return (
    <Flex as="footer" justify="center" fontSize="sm" color="gray.500" py={3}>
      Hire me @&nbsp;
      <Link href="https://seriouscode.io" textDecor="underline" isExternal _hover={{ color: 'gray.800' }}>
        seriouscode.io
      </Link>
    </Flex>
  );
}
