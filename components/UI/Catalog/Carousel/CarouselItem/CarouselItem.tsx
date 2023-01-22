import { FC } from 'react';
import { IProduct } from '../../../../../types/IProduct.interface';
import Image from 'next/image';
import styles from './CarouselItem.module.css';
import Link from 'next/link';
import { AnimationButton } from '../../../../Button/Button';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useActions } from '../../../../../hooks/useActions';
import { useAnimation } from 'framer-motion';
import React from 'react';
import cn from 'classnames';

const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	const isActive = false;
	const { addToCart, removeFromToCart } = useActions();
	const cart = useTypedSelector((state) => state.cart);
	const item = () => {
		const cartItem = cart.items.find((item) => item.id === product.id);
		if (cartItem) {
			return true;
		} else {
			return false;
		}
	};
	const controls = useAnimation();

	return (
		<div className={styles.button}>
			<div
				className={cn(styles['container-header'], {
					[styles['container-active']]: isActive
				})}
			>
				<Image
					className={styles['item-image']}
					src={product.images[0]}
					alt={product.name}
					loading={'lazy'}
					width={220}
					height={150}
				></Image>
				<div className={styles['container-info']}>
					<div className={styles.name}>{product.name}</div>
					<div className={styles.description}>
						{product.description.slice(0, 35) + '...'}
					</div>
					<Link className={styles.link} href={`/product/${product.slug}`}>
						More information
					</Link>
					<div className={styles.price}>{'Price: $ ' + product.price}</div>

					<AnimationButton
						exit={{ scale: 1 }}
						animate={controls}
						className={styles['btn-add-to-cart']}
						apperance='unprimary'
						onClick={() => {
							if (!item()) {
								addToCart({ id: product.id, product, quantity: 1 });
							} else {
								removeFromToCart({ id: product.id });
							}
							controls.start({
								scale: [1.0, 1.4, 1.0],
								transition: { duration: 0.1 }
							});
						}}
					>
						{!item() ? 'Add to cart' : 'Remove from cart'}
					</AnimationButton>
				</div>
			</div>
		</div>
	);
};
export default CarouselItem;
