import { FC } from 'react';
import Catalog from '../../components/UI/Catalog/Catalog';
import Heading from '../../components/UI/Heading/Heading';
import Sorting from '../../components/UI/Sorting/Sorting';
import { products } from '../../data/products.data';
import styles from './Home.module.css';

export const MainPage: FC = () => {
	return (
		<div>
			<Heading>
				Our new taste <br /> is your new emotions
			</Heading>
			<Sorting></Sorting>
			<Catalog products={products} className={styles.catalog} />
		</div>
	);
};
