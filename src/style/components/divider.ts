import { defineStyle, defineStyleConfig } from '@chakra-ui/styled-system';
import { mode } from '@chakra-ui/theme-tools';

const baseStyle = defineStyle((props) => ({
  opacity: mode(0.4, 0.2)(props),
  borderColor: 'inherit',
}));

const variantSolid = defineStyle({
  borderStyle: 'solid',
});

const variantDashed = defineStyle({
  borderStyle: 'dashed',
});

const variants = {
  solid: variantSolid,
  dashed: variantDashed,
};

export const dividerTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'solid',
  },
});
