import { Divider, Flex, Text } from '@chakra-ui/react';
import { ReactElement } from 'react';
import { Layout } from '../components/layout';
import { LayoutWrapper } from '../components/layout-wrapper';
import { Tweet } from '../components/tweet/tweet';
import { getLatestTweet, TransformedTweet } from '../utils/tweets';

interface Props {
  latestTweet: TransformedTweet | null;
}

export default function Custom404({ latestTweet }: Props) {
  return (
    <LayoutWrapper mt={12}>
      <Text as="h1" textAlign="center" fontSize="3xl" fontWeight="bold">
        Page not found 🤷‍♂️
      </Text>
      <Text as="h2" mt={4} opacity={0.8} textAlign="center" fontSize="2xl" fontWeight="semibold">
        It seems like the page you are looking for does not exist.
      </Text>
      <Divider my={20} />
      <Flex maxW="600px" mx="auto" direction="column" align="center" gap={5}>
        <Text fontSize="lg" fontWeight="semibold">
          My latest Tweet
        </Text>
        {latestTweet && <Tweet w="100%" data={latestTweet} />}
      </Flex>
    </LayoutWrapper>
  );
}

Custom404.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
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
