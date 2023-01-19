import { FC, useState } from 'react';

import Catalog from '../../components/UI/Catalog/Catalog';
import Heading from '../../components/UI/Heading/Heading';
import Sorting from '../../components/UI/Sorting/Sorting';

import { products } from '../../data/products.data';
import styles from './Home.module.css';

export const MainPage: FC = () => {
	const [sortType, setSortType] = useState('Default sorting');
	const getSortType = (type: string) => {
		setSortType(type);
	};
	return (
		<div>
			<Heading>
				Our new taste <br /> is your new emotions
			</Heading>
			<Sorting getSortType={getSortType}></Sorting>
			<Catalog
				products={products}
				sortType={sortType}
				className={styles.catalog}
			/>
		</div>
	);
};
