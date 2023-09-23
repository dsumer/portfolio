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
      width={isHorizontal ? '100%' : 'var(--thickness)'}
      height={isHorizontal ? 'var(--thickness)' : '100%'}
      background={
        isHorizontal
          ? {
              base: 'linear-gradient(to right, #f1f1f100, #f1f1f1 30%, #f1f1f1 70%, #f1f1f100)',
              _dark: 'linear-gradient(to right, #2c353f00, #2c353f 30%, #2c353f 70%, #2c353f00)',
            }
          : {
              base: 'linear-gradient(to bottom, #f1f1f100, #f1f1f1 30%, #f1f1f1 70%, #f1f1f100)',
              _dark: 'linear-gradient(to bottom, #2c353f00, #2c353f 30%, #2c353f 70%, #2c353f00)',
            }
      }
      {...props}
    />
  );
};
