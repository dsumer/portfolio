import { Metadata } from 'next';
import { Toaster } from 'react-hot-toast';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { styled } from 'styled-system/jsx';
import { Footer } from '../components/footer';
import { LayoutWrapper } from '../components/layout-wrapper';
import { Navigation } from '../components/navigation';
import { Providers } from '../components/providers';
import './global.css';

// TODO: add vercel analytics

export const metadata: Metadata = {
  title: 'Dominik Sumer',
  description: 'I love to bring my own ideas to life and strive to make a living from them.',
  viewport: 'width=device-width, initial-scale=1',
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
      <body>
        <BalancerProvider>
          <Providers>
            <Navigation />
            <styled.main flexGrow={1} my={8}>
              <LayoutWrapper>{children}</LayoutWrapper>
            </styled.main>
            <Footer />
            <Toaster position="bottom-center" toastOptions={{ duration: 5000 }} />
          </Providers>
        </BalancerProvider>
      </body>
    </html>
  );
}
