import { HTMLStyledProps, styled } from 'styled-system/jsx';

interface Props extends HTMLStyledProps<'div'> {
  orientation?: 'horizontal' | 'vertical';
  thickness?: string;
}

export const Divider = ({ orientation = 'horizontal', thickness = '1px', ...props }: Props) => {
  const isHorizontal = orientation === 'horizontal';

  return (
    <styled.div
      css={{
        '--thickness': thickness,
      }}
      borderColor={{ base: 'gray.100', _dark: 'gray.800' }}
      width={isHorizontal ? '100%' : 0}
      height={isHorizontal ? 0 : '100%'}
      borderTopWidth={isHorizontal ? 'var(--thickness)' : 0}
      borderLeftWidth={isHorizontal ? 0 : 'var(--thickness)'}
      {...props}
    />
  );
};
