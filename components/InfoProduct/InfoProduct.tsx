import { useAnimation } from 'framer-motion';
import React from 'react';
import { useState, FC } from 'react';
import { useActions } from './../../hooks/useActions';
import { useTypedSelector } from './../../hooks/useTypedSelector';
import { IProduct } from './../../types/IProduct.interface';
import { AnimationButton } from '../Button/Button';
import { Rating } from '../Rating/Rating';
import styles from './InfoProduct.module.css';

const InfoProduct: FC<{ product: IProduct }> = ({ product }) => {
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
	const controls = useAnimation();
	return (
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
				<AnimationButton
					animate={controls}
					apperance='unprimary'
					onClick={() => {
						if (!item()) {
							addToCart({ id: product.id, product, quantity: 1 });
						} else {
							removeFromToCart({ id: product.id });
						}
						controls.start({
							paddingLeft: [40, 50, 40],
							paddingRight: [40, 50, 40],
							transition: { duration: 0.2 }
						});
					}}
				>
					{!item() ? 'Add to cart' : 'Remove from cart'}
				</AnimationButton>
			</div>
		</div>
	);
};
export default React.memo(InfoProduct);
