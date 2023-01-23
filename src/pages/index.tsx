import { Box, Divider, Flex, LinkBox, LinkOverlay, SimpleGrid, Text } from '@chakra-ui/react';
import Avatar from '../../public/images/avatar.png';
import { ArticlePreview } from '../components/article-preview';
import { Layout } from '../components/layout';
import { LayoutWrapper } from '../components/layout-wrapper';
import { NewsletterForm } from '../components/newsletter-form';
import { SnappifyLogo } from '../components/snappify-logo';
import { StandardImage } from '../components/standard-image';
import { StandardLink } from '../components/standard-link';
import { Tweet } from '../components/tweet/tweet';
import { WavingHand } from '../components/waving-hand';
import { NextPageWithLayout } from '../types/page';
import { getLatestTweet, TransformedTweet } from '../utils/tweets';

interface Props {
  latestTweet: TransformedTweet | null;
}

const Page: NextPageWithLayout<Props> = ({ latestTweet }) => {
  return (
    <LayoutWrapper gap={[12, 14, 16]}>
      <Flex direction={['column', 'column', 'row']} gap={[6, 8, 20]} mx="auto" align="center" justify="space-between">
        <Box w={['330px', '385px']}>
          <Text as="h1" fontSize={['30px', '36px']} fontWeight="semibold" mb={4}>
            Hey, I&apos;m Dominik <WavingHand />
          </Text>
          <Text fontSize={['20px', '24px']}>
            I love to bring my own ideas to life and strive to make a living from them.
          </Text>
        </Box>
        <StandardImage
          priority
          loading="eager"
          src={Avatar}
          alt="Avatar of Dominik Sumer"
          width={200}
          height={200}
          filter="drop-shadow(0 0 20px rgba(0,0,0,0.14))"
          transform="translateZ(0)"
        />
      </Flex>
      <Divider />
      <SimpleGrid w={['95%', '85%', '100%']} mx="auto" columns={[1, 1, 2]} columnGap={9} rowGap={20}>
        <Flex direction="column" align="center" gap={5}>
          <Text fontSize="lg" fontWeight="semibold">
            My latest Tweet
          </Text>
          {latestTweet && <Tweet w="100%" data={latestTweet} />}
        </Flex>
        <Flex direction="column" align="center" gap={5}>
          <Text fontSize="lg" fontWeight="semibold">
            What I&apos;m currently working on
          </Text>
          <Flex
            as={LinkBox}
            align="center"
            justify="center"
            rounded="lg"
            maxW="100%"
            bg="linear-gradient(125.53deg, #FF9979 0%, #811FFF 100%);"
            py={5}
            px={8}
            color="white"
            transition="all .3s"
            _hover={{ transform: 'scale(1.025)' }}
            _active={{ transform: 'scale(1)' }}
          >
            <SnappifyLogo />
            <LinkOverlay href="https://snappify.com" isExternal />
          </Flex>
          <Text fontWeight="500" maxW="350px" textAlign="center">
            snappify is a powerful design tool enabling developers to create stunning visuals.
          </Text>
        </Flex>
      </SimpleGrid>
      <Divider />
      <Box>
        <Text as="h2" fontSize={['24px', '28px']} textAlign="center">
          Latest Articles
        </Text>
        <Flex direction="column" align="center" mt={10} gap={6}>
          {/** TODO: fill with data */}
          <ArticlePreview
            slug="how-to-use-react-to-generate-og-images"
            title="How to use React to generate your own OpenGraph images"
            description="Let's use the power of React together with Puppeteer / Playwright to style and generate dynamic images on the fly."
          />
          <ArticlePreview
            slug="how-to-integrate-gumroad-as-payment-provider-for-your-saas"
            title="How to integrate Gumroad as a payment provider for your SaaS"
            description="You want to concentrate on getting the MVP up and running instead of spending hours integrating a payment provider? Check out this blog post ✌️"
          />
          <ArticlePreview
            slug="publishing-a-typescript-library-in-2021"
            title="Publishing a TypeScript library in 2021"
            description="How to make your life easier by using TSDX to publish your next TypeScript library."
          />
          <StandardLink href="/blog" fontSize="lg" mt={2}>
            Read more articles
          </StandardLink>
        </Flex>
      </Box>
      <Divider />
      <NewsletterForm />
    </LayoutWrapper>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <Layout hideLogo>{page}</Layout>;
};

export async function getStaticProps() {
  const latestTweet = await getLatestTweet();

  return {
    props: {
      latestTweet,
    },
    revalidate: 3600, // fetching the latest tweet every hour
  };
}
