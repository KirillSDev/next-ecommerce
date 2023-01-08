import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import Main from './Main/Main';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children }: LayoutProps): JSX.Element => {
	return (
		<div className={styles.container}>
			<Header className={styles.header} />
			<Sidebar className={styles.sidebar} />
			<Main className={styles.main}></Main>
			{/* <div>{children}</div> */}
			<Footer className={styles.footer} />
		</div>
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
