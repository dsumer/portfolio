import NextImage, { ImageProps } from 'next/image';
import { css } from 'styled-system/css';
import { HTMLStyledProps } from 'styled-system/jsx';

type Props = Omit<HTMLStyledProps<'img'>, 'src'> & ImageProps;

export const Image = (props: Props) => {
  const { width, height, src, alt, priority, quality, placeholder, blurDataURL, loader, ...styles } = props;
  return (
    <NextImage
      width={width}
      height={height}
      src={src}
      alt={alt}
      priority={priority}
      quality={quality}
      blurDataURL={blurDataURL}
      loader={loader}
      className={css(styles)}
    />
  );
};
