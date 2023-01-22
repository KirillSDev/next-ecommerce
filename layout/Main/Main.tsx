import { MainProps } from './Main.props';
import styles from './Main.module.css';

export const Main = ({ children, ...props }: MainProps): JSX.Element => {
	return (
		<div {...props}>
			<div className={styles.main}>{children}</div>
		</div>
	);
};
