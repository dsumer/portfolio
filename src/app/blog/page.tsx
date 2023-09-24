import { Metadata } from 'next';
import { Box, Flex, styled } from 'styled-system/jsx';
import { ArticlePreview } from '../../components/article-preview';
import { LayoutWrapper } from '../../components/layout-wrapper';
import { ARTICLES } from '../../consts/articles';

export const metadata: Metadata = {
  title: 'Articles',
};

export default function Page() {
  return (
    <LayoutWrapper gap={20}>
      <Box>
        <styled.h2 fontSize={['24px', '28px']} textAlign="center">
          Glad you&apos;re stopping by! 🙇‍♂️
        </styled.h2>
        <Flex direction="column" align="center" mt={10} gap={10}>
          {Object.keys(ARTICLES).map((slug) => (
            <ArticlePreview key={slug} slug={slug} {...ARTICLES[slug]} />
          ))}
        </Flex>
      </Box>
    </LayoutWrapper>
  );
}
