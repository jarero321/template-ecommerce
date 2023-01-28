import { ApolloProvider } from '@apollo/client';
import { Html, Head, Main, NextScript } from 'next/document';
import { SnackbarProvider } from 'notistack';
import client from '../graphql/client';
import { SnackbarUtilitiesConfigurator } from '../utilities/snackbar-manager';

import { AxiosInterceptor } from '../interceptor/axios.interceptor';

AxiosInterceptor();
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ApolloProvider client={client}>
          <SnackbarProvider>
            <SnackbarUtilitiesConfigurator />
            <Main />
            <NextScript />
          </SnackbarProvider>
        </ApolloProvider>
      </body>
    </Html>
  );
}
