import { TranslateProvider } from 'next-zero-intl';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    
    return (
        <TranslateProvider>
            <Component {...pageProps} />
        </TranslateProvider>
    );
}

export default MyApp;
