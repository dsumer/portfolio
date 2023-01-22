import { Box, Flex, LinkBox, LinkOverlay, Text, useColorModeValue } from '@chakra-ui/react';
import { StandardImage } from './standard-image';
import { StandardLink } from './standard-link';

interface Props {
  title: string;
  description: string;
  slug: string;
}

export const ArticlePreview = ({ title, slug, description }: Props) => {
  const bgColor = useColorModeValue('#f1f5f7', '#293745');

  return (
    <Flex as={LinkBox} role="group" gap={5} maxW="600px" w="100%" bg={bgColor} rounded="lg" p={3}>
      <Box flexShrink={0} boxSize="130px" overflow="hidden" rounded="md">
        <StandardImage
          alt="Thumbnail"
          src={`/images/blog/${slug}/thumbnail.jpg`}
          width={130}
          height={130}
          transition="all .3s"
          _groupHover={{ transform: 'scale(1.1)' }}
        />
      </Box>
      <Flex direction="column">
        <Text as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
          <LinkOverlay as={StandardLink} href={'/blog/' + slug} textDecor="none">
            {title}
          </LinkOverlay>
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Flex>
    </Flex>
  );
};
