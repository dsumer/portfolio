'use client';
import throttle from 'lodash.throttle';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { css } from 'styled-system/css';
import { Center, Flex, styled } from 'styled-system/jsx';
import { Divider } from './common/divider';
import { LayoutWrapper } from './layout-wrapper';
import { NavLink } from './nav-link';
import ScrollProgressbar from './scroll-progress-bar';
import { ThemeButton } from './theme-button';

export const Navigation = () => {
  const hideLogo = usePathname() === '/';
  const showProgressbar = usePathname().startsWith('/blog/');

  const [isSticky, setSticky] = useState(false);
  const [_showLogo, setShowLogo] = useState(false);
  const showLogo = !hideLogo || _showLogo;

  useEffect(() => {
    // We need to listen on scroll changes in order to detect if the Navigation is sticky
    // but we throttle the events fired for better performance
    const scrollEventListener = throttle(() => {
      if (window.scrollY > 10) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (!hideLogo) {
        return;
      }

      const isMobileTab = window.innerWidth < 768; // TODO: check if this is correct
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
  }, [hideLogo]);

  return (
    <styled.nav
      w="100%"
      zIndex="999"
      boxShadow={isSticky ? '0px 0px 10px rgba(0,0,0,0.15)' : 'none'}
      bgColor="navBg"
      backdropFilter="blur(10px)"
      transition="box-shadow .6s"
      position="sticky"
      top="0px"
    >
      <LayoutWrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        fontSize={['16px', '18px', '20px']}
        fontWeight="semibold"
        py={4}
      >
        <Link
          href="/"
          className={css({
            opacity: showLogo ? 1 : 0.0001, // TODO: fix workaround 0.0001, bug in panda?
            transition: 'opacity .3s',
          })}
        >
          Dominik Sumer 👋
        </Link>
        <Flex align="center" gap={4}>
          <NavLink name="Articles" href="/blog" />
          <Center h="25px">
            <Divider orientation="vertical" />
          </Center>
          <ThemeButton />
        </Flex>
      </LayoutWrapper>
      {showProgressbar && <ScrollProgressbar />}
    </styled.nav>
  );
};
