import { FC } from 'react';
import Catalog from '../../components/UI/Catalog/Catalog';
import styles from './Main.module.css';
import Heading from '../../components/UI/Heading/Heading';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { products } from '../../data/products.data';
import Sorting from '../../components/UI/Sorting/Sorting';

export interface Main
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Main: FC<Main> = ({ ...props }) => {
	return (
		<div {...props}>
			<Heading>
				Our new taste <br /> is your new emotions
			</Heading>
			<Catalog products={products} className={styles.catalog} />
		</div>
	);
};

export default Main;
