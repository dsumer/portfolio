import { allArticles } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { Metadata } from 'next';
import { Box, Flex, styled } from 'styled-system/jsx';
import { ArticlePreview } from '../../components/article-preview';
import { LayoutWrapper } from '../../components/layout-wrapper';

export const metadata: Metadata = {
  title: 'Articles',
};

export default function Page() {
  const articles = allArticles.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));

  return (
    <LayoutWrapper gap={20}>
      <Box>
        <styled.h2 fontSize={['24px', '28px']} textAlign="center">
          Glad you&apos;re stopping by! 🙇‍♂️
        </styled.h2>
        <Flex direction="column" align="center" mt={10} gap={10}>
          {articles.map((article) => (
            <ArticlePreview key={article.url} article={article} />
          ))}
        </Flex>
      </Box>
    </LayoutWrapper>
  );
}
