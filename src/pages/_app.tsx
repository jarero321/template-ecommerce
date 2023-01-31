import '../styles/globals.css';
import '../styles/Loader.css';
import type { AppProps } from 'next/app';
import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { SnackbarProvider } from 'notistack';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import client from '../graphql/client';
import { persistor, store } from '../redux/store';
import { SnackbarUtilitiesConfigurator } from '../utilities/snackbar-manager';
import { AxiosInterceptor } from '../interceptor/axios.interceptor';
import { Raleway } from '@next/font/google';

const raleway = Raleway({
  weight: ['400', '700', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
});

AxiosInterceptor();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>
        {`
          :root {
            --font-raleway: ${raleway.style.fontFamily};
          }
        `}
      </style>
      <ApolloProvider client={client}>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <SnackbarProvider>
              <SnackbarUtilitiesConfigurator />
              <main>
                <Component {...pageProps} />
              </main>
            </SnackbarProvider>
          </Provider>
        </PersistGate>
      </ApolloProvider>
    </>
  );
}
