import { FC, useState } from 'react';
import { Layout } from '../../src/layout/Layout';
import { IProduct } from '../../src/types/IProduct.interface';
import { GetStaticPaths, GetStaticProps } from 'next';
import Heading from '../../src/components/UI/Heading/Heading';
import { products } from '../../src/data/products.data';
import { Button, Rating } from '../../src/components';
import Image from 'next/image';
import styles from './[slug].module.css';
import { useActions } from '../../src/hooks/useActions';
import { useTypedSelector } from '../../src/hooks/useTypedSelector';

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

const ProductDetails: FC<IProductDetails> = ({ product }) => {
	const cart = useTypedSelector((state) => state.cart);
	const item = () => {
		const cartItem = cart.items.find((item) => item.id === product.id);
		if (cartItem) {
			return true;
		} else {
			return false;
		}
	};
	const { addToCart, removeFromToCart } = useActions();
	const [rating, setRating] = useState<number>(3);
	const [inCart, setInCart] = useState<boolean>(false);
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
							className={styles['product-image']}
							alt={product.name}
							src={product.images[0]}
							width={450}
							height={300}
						></Image>
					</div>
				</div>
				<div className={styles.circle}>
					<div>30 g</div>
					<div>40 g</div>
					<div>50 g</div>
				</div>
				<div className={styles['product-info']}>
					<div>
						<div className={styles.name}>{product.name}</div>
						<div className={styles.description}>{product.description}</div>
						<div className={styles.price}>{'Price: $ ' + product.price}</div>
						<Rating
							className={styles.rating}
							rating={rating}
							setRating={setRating}
						/>
					</div>
					<div className={styles.button}>
						<Button
							apperance='unprimary'
							onClick={() => {
								// !inCart
								// 	? addToCart({ id: product.id, product, quantity: 1 })
								// 	: removeFromToCart({ id: product.id });
							}}
						>
							{!inCart ? 'Add to cart' : 'Remove from cart'}
						</Button>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default ProductDetails;