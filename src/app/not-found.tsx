import { Flex, LinkBox, LinkOverlay, styled } from 'styled-system/jsx';
import { Divider } from '../components/common/divider';
import { Text } from '../components/common/text';
import { LayoutWrapper } from '../components/layout-wrapper';
import { SnappifyLogo } from '../components/snappify-logo';

export default function NotFound() {
  return (
    <LayoutWrapper mt={12}>
      <styled.h1 textAlign="center" fontSize="3xl" fontWeight="bold">
        Page not found 🤷‍♂️
      </styled.h1>
      <styled.h2 mt={4} opacity={0.8} textAlign="center" fontSize="2xl" fontWeight="semibold">
        It seems like the page you are looking for does not exist.
      </styled.h2>
      <Divider my={16} />
      <Flex maxW="600px" mx="auto" direction="column" align="center" gap={5}>
        <Flex direction="column" align="center" gap={5}>
          <Text fontSize="lg" fontWeight="semibold">
            What I&apos;m currently working on
          </Text>
          <LinkBox
            display="flex"
            alignItems="center"
            justifyContent="center"
            rounded="lg"
            maxW="100%"
            bg="linear-gradient(125.53deg, #FF9979 0%, #811FFF 100%);"
            py={5}
            px={8}
            color="white"
            transition="all .3s"
            _hover={{ transform: 'scale(1.025)' }}
            _active={{ transform: 'scale(1)' }}
          >
            <SnappifyLogo />
            <LinkOverlay href="https://snappify.com" target="_blank" rel="noopener" />
          </LinkBox>
          <Text fontWeight="500" maxW="350px" textAlign="center">
            snappify is a powerful design tool enabling developers to create stunning visuals.
          </Text>
        </Flex>
      </Flex>
    </LayoutWrapper>
  );
}
