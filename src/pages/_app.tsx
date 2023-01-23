import { ChakraProvider } from '@chakra-ui/react';
import { Provider as BalancerProvider } from 'react-wrap-balancer';
import { theme } from '../style/theme';
import { AppPropsWithLayout } from '../types/page';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout<any>) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ChakraProvider theme={theme}>
      <BalancerProvider>{getLayout(<Component {...pageProps} />)}</BalancerProvider>
    </ChakraProvider>
  );
}
