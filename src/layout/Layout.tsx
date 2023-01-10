import Head from 'next/head';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import { Main } from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({
	children,
	title,
	description
}: LayoutProps): JSX.Element => {
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name='description' content={description} />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;900&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<div className={styles.container}>
				<Header className={styles.header} />
				<Sidebar className={styles.sidebar} />
				<Main className={styles.main}>{children}</Main>
			</div>
		</>
	);
};

// export const wrapLayout = <T extends Record<string, unknown>>(
// 	Component: FunctionComponent<T>
// ) => {
// 	return function wrapLayoutComponent(props: T): JSX.Element {
// 		return (
// 			<Layout>
// 				<Component {...props} />
// 			</Layout>
// 		);
// 	};
// };
