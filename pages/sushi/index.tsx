import { FC } from 'react';
import { Layout } from '../../src/layout/Layout';
import Catalog from '../../src/components/UI/Catalog/Catalog';
import { products } from '../../src/data/products.data';

const SushiPage: FC = () => {
	return (
		<Layout title='sushi' description='hello'>
			<Catalog products={products}></Catalog>
		</Layout>
	);
};

export default SushiPage;
