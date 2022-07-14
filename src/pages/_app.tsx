import '@/assets/styles/globals.css';
import type { AppProps } from 'next/app';
import useTranslation from 'next-translate/useTranslation';
import I18nProvider from 'next-translate/I18nProvider';
import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { SessionProvider } from "next-auth/react"
import 'antd/dist/antd.css';




function MyApp({ Component, pageProps }: AppProps) {
  const { lang } = useTranslation('common');
  return (
    <I18nProvider lang={lang}>
      <Provider store={store}>
        <SessionProvider session={pageProps.session} refetchInterval={0}>
          <Component {...pageProps}/>
        </SessionProvider>
      </Provider>
    </I18nProvider>
  );
}

export default MyApp;
