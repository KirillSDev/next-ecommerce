import { FC, ReactNode } from 'react';
import styles from './Heading.module.css';
import Sorting from '../Sorting/Sorting';

const Heading: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className={styles.container}>
			<Sorting></Sorting>
			<h1 className={styles.heading}>{children}</h1>;
		</div>
	);
};

export default Heading;
