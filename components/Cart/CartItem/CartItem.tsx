import { FC } from 'react';
import { ICartItem } from '../../../types/ICartItem.interface';
import Image from 'next/image';
import styles from './CartItem.module.css';

const CartItem: FC<{ item: ICartItem }> = ({ item }) => {
	return (
		<div>
			<Image
				src={item.product.images[0]}
				alt={item.product.name}
				width={150}
				height={100}
			/>
			<div>
				<div className={styles.name}></div>
				<div className={styles.price}>{item.product.price}</div>
				<div className={styles.description}>{item.product.description}</div>
			</div>
		</div>
	);
};

export default CartItem;
