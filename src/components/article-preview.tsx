import Balancer from 'react-wrap-balancer';
import { Box, Flex, LinkBox, styled } from 'styled-system/jsx';
import { Image } from './common/image';
import { LinkOverlay } from './common/link-overlay';
import { Text } from './common/text';

interface Props {
  title: string;
  description: string;
  slug: string;
}

export const ArticlePreview = ({ title, slug, description }: Props) => {
  return (
    <LinkBox
      display="flex"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'center', md: 'flex-start' }}
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
      <Box flexShrink={0} width="130px" height="130px" overflow="hidden" rounded="md">
        <Image alt="Thumbnail" src={`/images/blog/${slug}/thumbnail.jpg`} width={130} height={130} />
      </Box>
      <Flex direction="column">
        <styled.h3 fontSize="lg" fontWeight="semibold" mb={2}>
          <Balancer>
            <LinkOverlay href={'/blog/' + slug} textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {title}
            </LinkOverlay>
          </Balancer>
        </styled.h3>
        <Text fontSize="sm">{description}</Text>
      </Flex>
    </LinkBox>
  );
};
