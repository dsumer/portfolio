import NextLink from 'next/link';
import { PropsWithChildren } from 'react';
import { css } from 'styled-system/css';
import { HTMLStyledProps } from 'styled-system/jsx';

export interface LinkProps extends PropsWithChildren<HTMLStyledProps<'a'>> {
  href: string;
  isExternal?: boolean;
}

export const Link = ({ href, isExternal, children, ...props }: LinkProps) => (
  <NextLink
    href={href}
    target={isExternal ? '_blank' : undefined}
    rel={isExternal ? 'noopener' : undefined}
    className={css({
      textDecoration: 'underline',
      _hover: { color: { base: 'gray.700', _dark: 'gray.300' } },
      ...props,
    })}
  >
    {children}
  </NextLink>
);
