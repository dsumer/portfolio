import { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { styled } from 'styled-system/jsx';
import { Footer } from '../components/footer';
import { Navigation } from '../components/navigation';
import { Providers } from '../components/providers';
import { websiteUrl } from '../consts/common';
import './global.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(websiteUrl),
  title: { template: '%s | Dominik Sumer', default: 'Dominik Sumer' },
  description: 'I love to bring my own ideas to life and strive to make a living from them.',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '196x196',
      url: '/images/favicon-196.png',
    },
    {
      rel: 'apple-touch-icon',
      url: '/images/apple-icon-180.png',
    },
  ],
  openGraph: {
    title: 'Dominik Sumer',
    description: 'I love to bring my own ideas to life and strive to make a living from them.',
    url: 'https://dominiksumer.com',
    siteName: "Dominik Sumer's site",
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: `${websiteUrl}/og.png`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    title: 'Dominik Sumer',
    card: 'summary_large_image',
    creator: '@dominiksumer',
  },
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.vmtrcq = window.vmtrcq || [];window.vmtrc = window.vmtrc || ((...args) => window.vmtrcq.push(args));`,
          }}
        />
        <Script defer src="/_v_script.js" data-host="/_v" data-token="EJMTB0j3mwXkLQao-GcQm" />
      </head>
      <body>
        <BalancerProvider>
          <Providers>
            <Navigation />
            <styled.main display="flex" flexDir="column" flexGrow={1} my={8} gap={20}>
              {children}
            </styled.main>
            <Footer />
            <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
          </Providers>
        </BalancerProvider>
      </body>
    </html>
  );
}
