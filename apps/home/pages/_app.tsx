import { AppProps } from 'next/app';
import Head from 'next/head';

import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'

// Create a client
// const queryClient = new QueryClient()

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      // refetchOnmount: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 5*50*1000,
    },
  },
});
function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to home!</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  );
}

export default CustomApp;
