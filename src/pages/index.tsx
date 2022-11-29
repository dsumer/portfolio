import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import Avatar from '../../public/images/avatar.png';
import { ArticlePreview } from '../components/article-preview';
import { Layout } from '../components/layout';
import { LayoutWrapper } from '../components/layout-wrapper';
import { StandardLink } from '../components/standard-link';
import { WavingHand } from '../components/waving-hand';
import { NextPageWithLayout } from '../types/page';

const Page: NextPageWithLayout = () => {
  return (
    <LayoutWrapper gap={[12, 16, 20]}>
      <Flex direction={['column', 'column', 'row']} gap={[6, 8, 20]} mx="auto" align="center" justify="space-between">
        <Box w={['330px', '385px']}>
          <Text as="h1" fontSize={['30px', '36px']} fontWeight="semibold" mb={4}>
            Hey, I&apos;m Dominik <WavingHand />
          </Text>
          <Text fontSize={['20px', '24px']}>
            I love to bring my own ideas to life and strive to make a living from them.
          </Text>
        </Box>
        <Box sx={{ '> span': { filter: 'drop-shadow(0 0 20px rgba(0,0,0,0.14))', transform: 'translateZ(0)' } }}>
          <NextImage loading="eager" src={Avatar} alt="Avatar of Dominik Sumer" width={200} height={200} />
        </Box>
      </Flex>
      <Divider />
      <Box>
        <Text as="h2" fontSize={['24px', '28px']} textAlign="center">
          Projects
        </Text>
      </Box>
      <Divider />
      <Box>
        <Text as="h2" fontSize={['24px', '28px']} textAlign="center">
          Latest Articles
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
          <StandardLink href="/blog" fontSize="lg" mt={2}>
            Read more articles
          </StandardLink>
        </Flex>
      </Box>
      {/** TODO: newsletter form */}
    </LayoutWrapper>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <Layout hideLogo>{page}</Layout>;
};
