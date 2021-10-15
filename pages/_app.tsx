import '../styles/uikit.scss';
import '../styles/main.scss';
import type { AppProps  } from 'next/app';
import dynamic from 'next/dynamic';
const UIKit = dynamic(() => import('../components/Uikit'));

function App({ Component, pageProps }: AppProps) {
    return (
        <UIKit>
            <main>
                <Component {...pageProps} />
            </main>
        </UIKit>
    )
}  

export default App