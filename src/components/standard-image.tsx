import { chakra } from '@chakra-ui/react';
import NextImage from 'next/image';

export const StandardImage = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    ['width', 'height', 'src', 'alt', 'priority', 'quality', 'placeholder', 'blurDataURL', 'loader '].includes(prop),
});
