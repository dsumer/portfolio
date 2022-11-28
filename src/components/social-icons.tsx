import { Box, Flex, FlexProps, Link, useColorModeValue } from '@chakra-ui/react';
import { CgIndieHackers } from 'react-icons/cg';
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

export const SocialIcons = (props: FlexProps) => {
  const githubColor = useColorModeValue('#171515', 'gray.100');

  return (
    <Flex align="center" gap={2} {...props}>
      <Link target="_blank" href="https://twitter.com/dominiksumer">
        <Box as={FaTwitter} boxSize="17px" color="#1fa1f1" />
      </Link>
      <Flex as={Link} target="_blank" href="https://www.linkedin.com/in/dominik-sumer/" pos="relative">
        <Box position="absolute" left="0px" top="0px" boxSize="14px" bg="white" transform="translate(2px, 2px)" />
        <Box pos="relative" as={FaLinkedin} boxSize="18px" color="#0a66c2" />
      </Flex>
      <Link target="_blank" href="https://www.indiehackers.com/dominiksumer">
        <Box as={CgIndieHackers} boxSize="20px" mx="-2px" color={githubColor} />
      </Link>
      <Flex
        as={Link}
        target="_blank"
        href="https://www.instagram.com/dominik.sumer.dev/"
        flexShrink={0}
        justify="center"
        align="center"
        boxSize="17px"
        rounded="4px"
        bg="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
      >
        <Box as={FaInstagram} boxSize="14px" color="white" />
      </Flex>
      <Link target="_blank" href="https://github.com/dsumer">
        <Box as={FaGithub} boxSize="18px" color={githubColor} />
      </Link>
    </Flex>
  );
};
