import { FC } from 'react';
import { IProduct } from '../../../../../types/IProduct.interface';
import Image from 'next/image';
import styles from './CarouselItem.module.css';
import Link from 'next/link';
import cn from 'classnames';
import { Button } from '../../../../Button/Button';
import { useTypedSelector } from '../../../../../hooks/useTypedSelector';
import { useActions } from '../../../../../hooks/useActions';

const isActive = false;
const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
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
	return (
		<div className={styles.container}>
			<div
				className={cn(styles['container-header'], {
					[styles['container-active']]: isActive
				})}
			>
				<Image
					className={styles['item-image']}
					src={product.images[0]}
					alt={product.name}
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

					<Button
						className={styles['btn-add-to-cart']}
						apperance='unprimary'
						onClick={() => {
							if (!item()) {
								addToCart({ id: product.id, product, quantity: 1 });
							} else {
								removeFromToCart({ id: product.id });
							}
						}}
					>
						{!item() ? 'Add to cart' : 'Remove from cart'}
					</Button>
				</div>
			</div>
		</div>
	);
};
export default CarouselItem;
