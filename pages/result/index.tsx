import { FC, useEffect } from 'react';
import { Layout } from '../../src/layout/Layout';
import Catalog from '../../src/components/UI/Catalog/Catalog';
import { products } from '../../src/data/products.data';
import { useTypedSelector } from '../../src/hooks/useTypedSelector';
import { useActions } from '../../src/hooks/useActions';
import styles from './ResultPage.module.css';
import Link from 'next/link';

const ResultPage = () => {
	const searchResult = useTypedSelector((state) => state.search);
	const { removeFromArray } = useActions();
	const findElement = (name: string) => {
		const item = products.filter((item) =>
			item.name.toLowerCase().includes(name.toLowerCase())
		);
		return item;
		removeFromArray();
	};
	return (
		<Layout
			title='Results from sushi shop'
			description='Results from sushi shop'
		>
			{findElement(searchResult.item).length ? (
				<div>
					<div className={styles.text}>
						{'We found ' +
							findElement(searchResult.item).length +
							(findElement(searchResult.item).length > 1
								? ' products'
								: ' product') +
							' for you'}
					</div>
					<Catalog products={findElement(searchResult.item)}></Catalog>
				</div>
			) : (
				<div className={styles.text}>Ops... Nothing found 😞 </div>
			)}
		</Layout>
	);
};

export default ResultPage;
