import { CgIndieHackers } from 'react-icons/cg';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { css } from 'styled-system/css';
import { Box, Flex, FlexProps } from 'styled-system/jsx';
import { Link } from './common/link';

export const SocialIcons = (props: FlexProps) => {
  return (
    <Flex align="center" gap={2} {...props}>
      <Link href="https://twitter.com/dominiksumer" isExternal>
        <FaTwitter
          className={css({
            width: '17px',
            height: '17px',
            color: '#1fa1f1',
          })}
        />
      </Link>
      <Link display="flex" href="https://www.linkedin.com/in/dominik-sumer/" isExternal pos="relative">
        <Box
          position="absolute"
          left="0px"
          top="0px"
          width="14px"
          height="14px"
          bg="white"
          transform="translate(2px, 2px)"
        />
        <FaLinkedin
          className={css({
            pos: 'relative',
            width: '18px',
            height: '18px',
            color: '#0a66c2',
          })}
        />
      </Link>
      <Link href="https://www.indiehackers.com/dominiksumer" isExternal>
        <CgIndieHackers
          className={css({
            mx: '-2px',
            width: '20px',
            height: '20px',
            color: 'github',
          })}
        />
      </Link>
      <Link
        display="flex"
        href="https://www.instagram.com/dominik.sumer/"
        isExternal
        flexShrink={0}
        justifyContent="center"
        alignItems="center"
        width="17px"
        height="17px"
        rounded="4px"
        bg="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
      >
        <FaInstagram
          className={css({
            width: '14px',
            height: '14px',
            color: 'white',
          })}
        />
      </Link>
      <Link href="https://github.com/dsumer" isExternal>
        <FaGithub
          className={css({
            width: '18px',
            height: '18px',
            color: 'github',
          })}
        />
      </Link>
    </Flex>
  );
};
