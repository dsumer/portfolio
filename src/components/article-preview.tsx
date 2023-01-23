import { Box, Flex, LinkBox, LinkOverlay, Text } from '@chakra-ui/react';
import Balancer from 'react-wrap-balancer';
import { StandardImage } from './standard-image';
import { StandardLink } from './standard-link';

interface Props {
  title: string;
  description: string;
  slug: string;
}

export const ArticlePreview = ({ title, slug, description }: Props) => {
  return (
    <Flex
      as={LinkBox}
      gap={5}
      maxW="600px"
      w="100%"
      bg="lightGray"
      rounded="lg"
      p={3}
      transition="all .3s"
      _hover={{ transform: 'scale(1.025)' }}
      _active={{ transform: 'scale(1)' }}
    >
      <Box flexShrink={0} boxSize="130px" overflow="hidden" rounded="md">
        <StandardImage alt="Thumbnail" src={`/images/blog/${slug}/thumbnail.jpg`} width={130} height={130} />
      </Box>
      <Flex direction="column">
        <Text as="h3" fontSize="lg" fontWeight="semibold" mb={2}>
          <Balancer>
            <LinkOverlay as={StandardLink} href={'/blog/' + slug} textDecor="none" _hover={{ textDecor: 'none' }}>
              {title}
            </LinkOverlay>
          </Balancer>
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Flex>
    </Flex>
  );
};
