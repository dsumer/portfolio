import { Flex, styled } from 'styled-system/jsx';
import { Divider } from './common/divider';
import { Link } from './common/link';
import { SocialIcons } from './social-icons';

export function Footer() {
  return (
    <>
      <Divider mb={6} mt={20} w="90%" maxW="1000px" mx="auto" />
      <styled.footer display="flex" flexDir="column" alignItems="center" py={3} mb={3}>
        <Flex fontSize="sm" color="gray.500">
          I&apos;m available for hire @&nbsp;
          <Link href="https://seriouscode.io" isExternal>
            seriouscode.io
          </Link>
        </Flex>
        <SocialIcons />
      </styled.footer>
    </>
  );
}
