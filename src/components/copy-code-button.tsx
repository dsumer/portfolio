'use client';
import { useState } from 'react';
import { styled } from 'styled-system/jsx';

interface Props {
  code: string;
}

export const CopyCodeButton = ({ code }: Props) => {
  const [copied, setCopied] = useState(false);

  const onCopy = () => {
    if (copied) {
      return false;
    }

    navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <styled.button
      pos="absolute"
      right={2}
      top={2}
      transition="opacity .3s"
      opacity={0}
      _groupHover={{ opacity: 0.9 }}
      bg={{ base: 'gray.300', _dark: 'gray.700' }}
      paddingX={2}
      paddingY={1}
      rounded="lg"
      cursor="pointer"
      onClick={onCopy}
    >
      {copied ? 'Copied!' : 'Copy'}
    </styled.button>
  );
};
