import { Box } from 'styled-system/jsx';
import { Image } from './common/image';

interface Props {
  slug: string;
}

export const BlogCoverImage = ({ slug }: Props) => {
  return (
    <Box maxW="750px" mt={8} mb={12}>
      <Image
        src={`/images/blog/${slug}/banner.jpg`}
        alt="Blog Post Cover Image"
        width={1400}
        height={700}
        rounded="10px"
      />
    </Box>
  );
};