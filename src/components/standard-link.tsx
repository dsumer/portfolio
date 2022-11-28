import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

export const StandardLink = ({ href, ...props }: LinkProps & { href: string }) => (
  <NextLink href={href} passHref>
    <Link textDecor="underline" {...props} />
  </NextLink>
);
