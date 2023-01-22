import { FC } from 'react';
import { Layout } from '../../layout/Layout';
import { IProduct } from '../../types/IProduct.interface';
import { GetStaticPaths, GetStaticProps } from 'next';
import Heading from '../../components/UI/Heading/Heading';
import { products } from '../../data/products.data';
import Image from 'next/image';
import styles from './[slug].module.css';
import React from 'react';
import InfoProduct from '../../components/InfoProduct/InfoProduct';

export interface IProductDetails {
	product: IProduct;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = products.map((product) => {
		return {
			params: { slug: product.slug }
		};
	});
	return {
		paths,
		fallback: false
	};
};
export const getStaticProps: GetStaticProps = async ({ params }) => {
	const product = products.find((product) => product.slug === params?.slug);

	return {
		props: {
			product
		}
	};
};
const sizeImage = (property: string): number => {
	if (property === 'width') {
		if (window.innerWidth < 810) {
			return 410;
		} else {
			return 450;
		}
	} else {
		if (window.innerWidth < 810) {
			return 270;
		} else {
			return 300;
		}
	}
};

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	// eslint-disable-next-line @typescript-eslint/no-empty-function

	return (
		<Layout title={product.name} description={product.description}>
			<div className={styles.wrapper}>
				<div className={styles.heading}>
					<Heading>
						You can choose <br />
						your favorite
						<br /> flavor according <br />
						to your mood
					</Heading>
				</div>
				<div className={styles['container-info']}>
					<div>
						<Image
							priority={true}
							className={styles['product-image']}
							alt={product.name}
							src={product.images[0]}
							width={sizeImage('width')}
							height={sizeImage('height')}
						></Image>
					</div>
				</div>
				<div className={styles.circle}>
					<div>30 g</div>
					<div>40 g</div>
					<div>50 g</div>
				</div>
				<div className={styles['container-product-info']}>
					<InfoProduct product={product}></InfoProduct>
				</div>
			</div>
		</Layout>
	);
};
export default ProductDetails;
