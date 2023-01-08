import { FC } from 'react';
import Catalog from '../../components/UI/Catalog/Catalog';
import styles from './Main.module.css';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { products } from '../../data/products.data';

export interface Main
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Main: FC<Main> = ({ ...props }) => {
	return (
		<div {...props}>
			<Catalog products={products} className={styles.catalog} />
		</div>
	);
};

export default Main;
