import { Metadata } from 'next';
import { Box, Flex, styled } from 'styled-system/jsx';
import { ArticlePreview } from '../../components/article-preview';
import { LayoutWrapper } from '../../components/layout-wrapper';

export const metadata: Metadata = {
  title: 'Articles - Dominik Sumer',
};

export default function Page() {
  return (
    <LayoutWrapper gap={20}>
      <Box>
        <styled.h2 fontSize={['24px', '28px']} textAlign="center">
          Glad you&apos;re stopping by! 🙇‍♂️
        </styled.h2>
        <Flex direction="column" align="center" mt={10} gap={6}>
          <ArticlePreview
            slug="how-to-use-react-to-generate-og-images"
            title="How to use React to generate your own OpenGraph images"
            description="Let's use the power of React together with Puppeteer / Playwright to style and generate dynamic images on the fly."
          />
          <ArticlePreview
            slug="how-to-use-react-to-generate-og-images"
            title="How to integrate Gumroad as a payment provider for your SaaS"
            description="You want to concentrate on getting the MVP up and running instead of spending hours integrating a payment provider? Check out this blog post ✌️"
          />
          <ArticlePreview
            slug="how-to-use-react-to-generate-og-images"
            title="Publishing a TypeScript library in 2021"
            description="How to make your life easier by using TSDX to publish your next TypeScript library."
          />
        </Flex>
      </Box>
    </LayoutWrapper>
  );
}
