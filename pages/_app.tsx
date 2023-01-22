/* eslint-disable @next/next/no-page-custom-font */
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { persistor, store } from '../store/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { useState } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import Loader from '../components/Loader/Loader';

import 'nprogress/nprogress.css'; //styles of nprogress

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const [loading, setLoading] = useState(false);
	Router.events.on('routeChangeStart', (url) => {
		NProgress.start();
		setLoading(true);
	});
	Router.events.on('routeChangeComplete', (url) => {
		NProgress.done();
		setLoading(false);
	});
	Router.events.on('routeChangeError', (url) => NProgress.done());
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				{loading && <Loader />}
				{!loading && <Component {...pageProps} />}
			</PersistGate>
		</Provider>
	);
}
