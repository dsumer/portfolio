import { Text } from '@chakra-ui/react';
import { Layout } from '../components/layout';
import { LayoutWrapper } from '../components/layout-wrapper';
import { NextPageWithLayout } from '../types/page';

const Page: NextPageWithLayout = () => {
  return (
    <LayoutWrapper minH="100%" mt={20} align="center">
      <Text as="h2" fontSize={['24px', '28px']} textAlign="center">
        Your email address was confirmed successfully 🙌
      </Text>
    </LayoutWrapper>
  );
};

export default Page;

Page.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
