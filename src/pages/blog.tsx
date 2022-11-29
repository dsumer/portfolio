import { Box, Flex, Text } from '@chakra-ui/react';
import { NextSeo } from 'next-seo';
import { ArticlePreview } from '../components/article-preview';
import { Layout } from '../components/layout';
import { LayoutWrapper } from '../components/layout-wrapper';
import { NextPageWithLayout } from '../types/page';

const Page: NextPageWithLayout = () => {
  return (
    <>
      <NextSeo title="Articles - Dominik Sumer" />
      <LayoutWrapper gap={20}>
        <Box>
          <Text as="h2" fontSize={['24px', '28px']} textAlign="center">
            Glad you&apos;re stopping by! 🙇‍♂️
          </Text>
          <Flex direction="column" align="center" mt={10} gap={7}>
            <ArticlePreview
              title="How to use React to generate your own OpenGraph images"
              description="Let's use the power of React together with Puppeteer / Playwright to style and generate dynamic images on the fly."
            />
            <ArticlePreview
              title="How to integrate Gumroad as a payment provider for your SaaS"
              description="You want to concentrate on getting the MVP up and running instead of spending hours integrating a payment provider? Check out this blog post ✌️"
            />
            <ArticlePreview
              title="Publishing a TypeScript library in 2021"
              description="How to make your life easier by using TSDX to publish your next TypeScript library."
            />
          </Flex>
        </Box>
      </LayoutWrapper>
    </>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
