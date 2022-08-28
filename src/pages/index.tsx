import { Box, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import Avatar from '../../public/images/avatar.png';
import { Layout } from '../components/layout';
import { LayoutWrapper } from '../components/layout-wrapper';
import { WavingHand } from '../components/waving-hand';
import { NextPageWithLayout } from '../types/page';

const Page: NextPageWithLayout = () => {
  return (
    <LayoutWrapper gap={20}>
      <Flex direction={['column', 'column', 'row']} gap={20} mx="auto" align="center" justify="space-between">
        <Box w="385px">
          <Text as="h1" fontSize="36px" fontWeight="semibold" mb={4}>
            Hey, I&apos;m Dominik <WavingHand />
          </Text>
          <Text fontSize="24px">I love to bring my own ideas to life and strive to make a living from them.</Text>
        </Box>
        <NextImage src={Avatar} width={200} height={200} />
      </Flex>
      <Box>hiho</Box>
    </LayoutWrapper>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <Layout hideLogo>{page}</Layout>;
};
