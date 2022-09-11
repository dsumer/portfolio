import { Box } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { PropsWithChildren } from 'react';
import { websiteUrl } from '../consts/common';
import { Footer } from './footer';
import { Navigation } from './navigation';

const title = 'Portfolio - Dominik Sumer';
const description = 'I love to bring my own ideas to life and strive to make a living from them.';

interface Props {
  hideLogo?: boolean;
}

export const Layout = ({ children, hideLogo }: PropsWithChildren<Props>) => {
  return (
    <>
      <DefaultSeo
        title={title}
        description={description}
        canonical={websiteUrl}
        openGraph={{
          type: 'website',
          url: websiteUrl,
          title,
          description,
          images: [{ url: `${websiteUrl}images/avatar.png` }],
        }}
      />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" sizes="196x196" href="/images/favicon-196.png" />
        <link rel="apple-touch-icon" href="images/apple-icon-180.png" />
        {/* TODO: <script async src="https://cdn.splitbee.io/sb.js" /> */}
      </Head>
      <Navigation hideLogo={hideLogo} />
      <Box as="main" flexGrow={1} my={8}>
        {children}
      </Box>
      <Footer />
    </>
  );
};
