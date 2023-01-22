import { Divider, Flex, Link, useColorModeValue } from '@chakra-ui/react';
import { LayoutWrapper } from './layout-wrapper';
import { SocialIcons } from './social-icons';

export function Footer() {
  return (
    <>
      <LayoutWrapper>
        <Divider my={6} />
      </LayoutWrapper>
      <Flex as="footer" direction="column" align="center" py={3} mb={3}>
        <Flex fontSize="sm" color="gray.500">
          I&apos;m available for hire @&nbsp;
          <Link
            href="https://seriouscode.io"
            textDecor="underline"
            isExternal
            _hover={{ color: useColorModeValue('gray.800', 'gray.200') }}
          >
            seriouscode.io
          </Link>
        </Flex>
        <SocialIcons mt={4} />
      </Flex>
    </>
  );
}
