import { TranslationProvider } from 'next-zero-intl';
import type { AppProps } from 'next/app'
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    
    return (
        <TranslationProvider>
            <Component {...pageProps} />
        </TranslationProvider>
    );
}

export default MyApp;
