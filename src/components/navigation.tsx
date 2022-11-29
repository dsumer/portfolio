import { Box, Center, Divider, Flex, IconButton, useBreakpointValue, useColorMode } from '@chakra-ui/react';
import throttle from 'lodash.throttle';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';
import { FiMoon, FiSun } from 'react-icons/fi/index';
import { CustomLink } from './custom-link';
import { LayoutWrapper } from './layout-wrapper';

interface Props {
  hideLogo?: boolean;
}

export const Navigation = ({ hideLogo }: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSticky, setSticky] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const isMobileTab = useBreakpointValue([true, true, false]);

  useEffect(() => {
    // We need to listen on scroll changes in order to detect if the Navigation is sticky
    // but we throttle the events fired for better performance
    const scrollEventListener = throttle(() => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }
      if (window.scrollY > (isMobileTab ? 65 : 95)) {
        setShowLogo(true);
      } else {
        setShowLogo(false);
      }
    }, 200);
    scrollEventListener();
    window.addEventListener('scroll', scrollEventListener);

    return () => {
      window.removeEventListener('scroll', scrollEventListener);
    };
  }, [isMobileTab]);

  return (
    <Box
      w="100%"
      as="nav"
      zIndex="docked"
      boxShadow={isSticky ? '0px 0px 10px rgba(0,0,0,0.15)' : 'none'}
      transition="all .3s"
      bg="chakra-body-bg"
      position="sticky"
      top="0px"
    >
      <LayoutWrapper
        direction="row"
        align="center"
        justify="space-between"
        fontSize={['16px', '18px', '20px']}
        fontWeight="semibold"
        py={4}
      >
        <NextLink href="/">
          <Box as="a" cursor="pointer" opacity={hideLogo && !showLogo ? 0 : 1} transition="all .3s">
            Dominik Sumer 👋
          </Box>
        </NextLink>
        <Flex align="center" gap={4}>
          <CustomLink name="Articles" href="/blog">
            Articles
          </CustomLink>
          <Center h="25px">
            <Divider orientation="vertical" />
          </Center>
          <IconButton
            variant="ghost"
            minW="0px"
            height="auto"
            p={2}
            m={-2}
            fontSize="20px"
            aria-label={`Switch to ${colorMode === 'light' ? 'dark' : 'light'} mode`}
            icon={colorMode === 'light' ? <FiSun /> : <FiMoon />}
            onClick={toggleColorMode}
          />
        </Flex>
      </LayoutWrapper>
    </Box>
  );
};
