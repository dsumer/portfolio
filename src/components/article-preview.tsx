import { Article } from 'contentlayer/generated';
import Balancer from 'react-wrap-balancer';
import { Flex, LinkBox, styled } from 'styled-system/jsx';
import { Image } from './common/image';
import { LinkOverlay } from './common/link-overlay';
import { Text } from './common/text';

interface Props {
  article: Article;
}

export const ArticlePreview = ({ article }: Props) => {
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
      transition="transform .3s"
      _hover={{ transform: 'scale(1.025)' }}
      _active={{ transform: 'scale(1)' }}
      cursor="pointer"
    >
      <Image
        alt="Thumbnail"
        src={`/images${article.url}/thumbnail.jpg`}
        width={130}
        height={130}
        rounded="md"
        bg="linear-gradient(140deg, #8336d29c, transparent)"
        flexShrink={0}
      />
      <Flex direction="column">
        <styled.h3 fontSize="lg" fontWeight="semibold" mb={2}>
          <Balancer>
            <LinkOverlay href={article.url} textDecoration="none" _hover={{ textDecoration: 'none' }}>
              {article.title}
            </LinkOverlay>
          </Balancer>
        </styled.h3>
        <Text fontSize="sm">{article.description}</Text>
      </Flex>
    </LinkBox>
  );
};
