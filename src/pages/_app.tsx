import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../style/theme';
import { AppPropsWithLayout } from '../types/page';

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return <ChakraProvider theme={theme}>{getLayout(<Component {...pageProps} />)}</ChakraProvider>;
}
