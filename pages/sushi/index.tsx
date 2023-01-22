import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import Catalog from '../../components/UI/Catalog/Catalog';
import { products } from '../../data/products.data';

const SushiPage: FC = () => {
	return (
		<Layout title='Sushi' description='sushi'>
			<Catalog
				products={products.filter((product) => product.category === 'sushi')}
			></Catalog>
		</Layout>
	);
};

export default SushiPage;
