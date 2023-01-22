import { FC } from 'react';
import styles from './Loader.module.css';

export const Loader: FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.colorful}></div>
		</div>
	);
};

export default Loader;
