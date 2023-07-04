import { Link, LinkProps } from './link';

export const LinkOverlay = (props: LinkProps) => {
  return <Link {...props} pos="static" _before={{ display: 'block', content: '" "', pos: 'absolute', inset: 0 }} />;
};
