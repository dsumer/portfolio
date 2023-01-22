import { Link, LinkProps } from '@chakra-ui/react';
import NextLink from 'next/link';

export const StandardLink = ({ href, ...props }: LinkProps & { href: string }) => (
  <Link as={NextLink} href={href} textDecor="underline" {...props} />
);
