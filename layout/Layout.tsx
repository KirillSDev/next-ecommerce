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
					href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,600&display=swap'
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
