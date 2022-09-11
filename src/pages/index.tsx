import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import Avatar from '../../public/images/avatar.png';
import { Layout } from '../components/layout';
import { LayoutWrapper } from '../components/layout-wrapper';
import { WavingHand } from '../components/waving-hand';
import { NextPageWithLayout } from '../types/page';

const Page: NextPageWithLayout = () => {
  return (
    <LayoutWrapper gap={20}>
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
        <Text as="h2" fontSize={['24px', '28px']}>
          Latest Articles
        </Text>
      </Box>
      <Box>
        <Text as="h2" fontSize={['24px', '28px']}>
          Projects
        </Text>
      </Box>
    </LayoutWrapper>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <Layout hideLogo>{page}</Layout>;
};
