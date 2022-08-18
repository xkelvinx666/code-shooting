import '../styles/globals.css';

import { Provider } from 'react-redux';
import {NextIntlProvider} from 'next-intl';
import type { AppProps } from 'next/app';

import store from '../utils/store';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </Provider>
  );
}
