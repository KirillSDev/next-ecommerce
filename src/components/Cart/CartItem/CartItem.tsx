import { FC } from 'react';
import { ICartItem } from '../../../types/ICartItem.interface';
import Image from 'next/image';
import styles from './CartItem.module.css';
import { CartActions } from '../CartActions/CartActions';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div className={styles.cartItem}>
			<Image
				className={styles.cartImage}
				src={item.product.images[0]}
				alt={item.product.name}
				width={150}
				height={100}
			/>
			<div className={styles.name}>{item.product.name}</div>
			<div className={styles.quantity}>{'Quintity: ' + item.quantity}</div>
			<div className={styles.price}>{item.product.price + ' $'}</div>
			<div className={styles.description}>{item.product.description}</div>
			<CartActions item={item}></CartActions>
		</div>
	);
};

export default CartItem;