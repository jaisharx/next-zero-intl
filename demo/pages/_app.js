import { TranslateProvider } from '../../dist/index';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    
    return (
        <TranslateProvider>
            <Component {...pageProps} />
        </TranslateProvider>
    );
}

export default MyApp;
