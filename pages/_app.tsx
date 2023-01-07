/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';
import 'antd/dist/reset.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { store } from '../src/store/store';
import { Provider } from 'react-redux';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	return (
		<Provider store={store}>
			<Head>
				<title>Rankings App</title>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<Component {...pageProps} />
		</Provider>
	);
}
