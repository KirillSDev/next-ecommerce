import { FC } from 'react';
import { Layout } from '../../src/layout/Layout';
import Catalog from '../../src/components/UI/Catalog/Catalog';
import { products } from '../../src/data/products.data';

const RollsPage: FC = () => {
	return (
		<Layout title='Rolls' description='rolls'>
			<Catalog
				products={products.filter((product) => product.category === 'rolls')}
			></Catalog>
		</Layout>
	);
};

export default RollsPage;
