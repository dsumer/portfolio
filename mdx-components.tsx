import type { MDXComponents } from 'mdx/types';
import React from 'react';
import Balancer from 'react-wrap-balancer';
import { Box, styled } from 'styled-system/jsx';
import { BlogCoverImage } from './src/components/blog-cover-image';
import { BlogMetaInfo } from './src/components/blog-meta-info';
import { Divider } from './src/components/common/divider';
import { Image } from './src/components/common/image';
import { Link } from './src/components/common/link';
import { SyntaxHighlightedCode } from './src/components/syntax-highlighted-code';

const CODE_FONT_FAMILY = 'SFMono-Regular, Menlo, Monaco, Consolas, monospace';
const DEFAULT_FONTSIZE = '1.35em';
const LINK_HOVER_STATE = {
  bg: { base: 'blue.100', _dark: 'purple.800' },
  color: { base: 'blue.700', _dark: 'purple.200' },
};
const HEADING_LINK_PROPS = {
  scrollMarginTop: { base: '70px', sm: '80px' },
  '&:hover a': { opacity: 1 },
  '& a': {
    width: '35px',
    opacity: 0,
    display: { base: 'none', sm: 'inline-block' },
    bg: 'none!important',
    pos: 'absolute',
    left: '-25px',
    color: { base: 'gray.700', _dark: 'gray.200' },
  },
  '& a .icon': { _before: { content: "'#'" } },
} as const;

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    blockquote: ({ ref, ...props }) => {
      const blockQuoteColor = { base: 'gray.500', _dark: 'gray.400' };
      return (
        <styled.blockquote
          borderLeft="5px solid"
          mt={8}
          pl={4}
          py={0}
          borderColor={blockQuoteColor}
          color={blockQuoteColor}
          css={{ '& p': { mt: 0 } }}
          {...props}
        />
      );
    },
    h1: ({ children, ref, ...props }) => (
      <styled.h1
        fontSize={{ base: '2.5em', sm: '3em', md: '3.25em' }}
        lineHeight="1.25em"
        fontWeight="medium"
        css={{ '& a': { display: 'none' } }}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </styled.h1>
    ),
    h2: ({ children, ref, ...props }) => (
      <styled.h2
        pos="relative"
        fontSize="1.85em"
        lineHeight="1.25em"
        fontWeight="medium"
        mt="2.5em"
        css={HEADING_LINK_PROPS}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </styled.h2>
    ),
    h3: ({ children, ref, ...props }) => (
      <styled.h3
        pos="relative"
        fontSize="1.5em"
        lineHeight="1.25em"
        fontWeight="medium"
        mt="2.3em"
        css={HEADING_LINK_PROPS}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </styled.h3>
    ),
    h4: ({ children, ref, ...props }) => (
      <styled.h4
        pos="relative"
        fontSize="1.4em"
        lineHeight="1.25em"
        fontWeight="medium"
        mt="2.7em"
        css={HEADING_LINK_PROPS}
        {...props}
      >
        <Balancer>{children}</Balancer>
      </styled.h4>
    ),
    p: ({ ref, ...props }) => <styled.p fontSize={DEFAULT_FONTSIZE} lineHeight="1.65em" mt={6} {...props} />,
    ul: ({ ref, ...props }) => {
      return (
        <styled.ul
          css={{ '& li': { my: 2, listStyle: 'disc' } }}
          fontSize={DEFAULT_FONTSIZE}
          lineHeight="1.65em"
          mt={6}
          mb={10}
          pl={6}
          {...props}
        />
      );
    },
    ol: ({ ref, ...props }) => {
      return (
        <styled.ol
          css={{ '& li': { my: 2, listStyle: 'decimal' } }}
          fontSize={DEFAULT_FONTSIZE}
          lineHeight="1.65em"
          mt={6}
          mb={10}
          pl={6}
          {...props}
        />
      );
    },
    a: ({ href, ref, ...props }) => {
      const isExternal = !!(href && !href.startsWith('/') && !href.startsWith('#'));

      return (
        <Link
          pos="relative"
          rounded="4px"
          transition="all 0.2s ease-in-out"
          m={-0.5}
          p={0.5}
          textDecoration="none"
          color={{ base: 'blue.700', _dark: 'purple.400' }}
          _hover={LINK_HOVER_STATE}
          _focus={{ outline: 'none', ...LINK_HOVER_STATE }}
          href={href || '#'}
          isExternal={isExternal}
          {...props}
        />
      );
    },
    hr: ({ children }) => {
      return <Divider my={8}>{children}</Divider>;
    },
    pre: ({ children, ref, ...props }) => {
      return (
        <styled.pre
          fontSize="1.1em"
          mt={6}
          mb={4}
          p={4}
          bg={{ base: 'lightGray', _dark: '#27303f' }}
          border="1px solid"
          borderColor={{ base: 'gray.300', _dark: 'gray.600' }}
          rounded="lg"
          overflowX="auto"
          css={{
            '& code': {
              fontSize: 'inherit',
              lineHeight: '1.2em',
              color: 'inherit',
              fontFamily: CODE_FONT_FAMILY,
            },
          }}
          {...props}
        >
          {React.cloneElement(children as any, { dataCodeBlock: true })}
        </styled.pre>
      );
    },
    code: ({ dataCodeBlock, ...props }: any) => {
      const isCodeBlock = dataCodeBlock === true;

      if (isCodeBlock) {
        return <SyntaxHighlightedCode {...props} />;
      }

      return (
        <styled.code
          fontSize="0.8em"
          my={-1}
          p={1}
          bg={{ base: 'lightGray', _dark: '#27303f' }}
          border="1px solid"
          borderColor={{ base: 'gray.300', _dark: 'gray.600' }}
          fontFamily={CODE_FONT_FAMILY}
          rounded="md"
          {...props}
        />
      );
    },

    Box: (props) => <Box {...props} />,
    BlogCoverImage,
    BlogMetaInfo,
    Image: (props) => <Image rounded="12px" {...props} />,
  };
}
