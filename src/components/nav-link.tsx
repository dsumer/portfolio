import Link from 'next/link';
import { forwardRef } from 'react';
import { css, cx } from 'styled-system/css';
import { Box } from 'styled-system/jsx';

interface Props {
  name: string;
  href: string;
}

export const NavLink = forwardRef<HTMLAnchorElement, Props>(function CustomLink({ name, href }, ref) {
  return (
    <Link
      href={href}
      ref={ref}
      aria-label={name}
      className={cx(
        'group',
        css({
          pos: 'relative',
          fontWeight: 'semibold',
          _hover: { textDecoration: 'none' },
          _focus: { boxShadow: 'none' },
        }),
      )}
    >
      {name}
      <Box
        aria-hidden="true"
        mt="-3px"
        mx="auto"
        transform="translateY(3px)"
        w="0%"
        h="3px"
        bg="gray.500"
        transition="width .2s"
        _groupHover={{ w: '100%' }}
        pointerEvents="none"
      />
    </Link>
  );
});
