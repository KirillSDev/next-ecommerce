import { FC, ReactNode, useState } from 'react';
import { ICartItem } from '../../../types/ICartItem.interface';
import styles from './CartActions.module.css';
import cn from 'classnames';
import { useActions } from '../../../hooks/useActions';

export const CartActions: FC<{
	children?: ReactNode;
	item: ICartItem;
}> = ({ item }) => {
	const [quantity, setQuantity] = useState(item.quantity);
	const [isClick, setIsClick] = useState(false);
	const { addToCart, removeFromToCart } = useActions();
	return (
		<div className={styles['cart-actions']}>
			<button
				className={cn(styles.button, {
					[styles['button-click']]: isClick === true,
					[styles['button-unclick']]: isClick === false
				})}
				onClick={() => {
					if (quantity > 0) {
						setQuantity(quantity - 1);
					}
					setIsClick(true);
					setTimeout(() => {
						setIsClick(false);
					}, 100);
				}}
			>
				-
			</button>
			<div>{quantity}</div>
			<button
				className={cn(styles.button, {
					[styles['button-click']]: isClick === true,
					[styles['button-unclick']]: isClick === false
				})}
				onClick={() => {
					if (quantity < 5) {
						setQuantity(quantity + 1);
					}
					setIsClick(true);
					setTimeout(() => {
						setIsClick(false);
					}, 100);
				}}
			>
				+
			</button>
			<button
				className={styles.remove}
				onClick={() => removeFromToCart({ id: item.id })}
			>
				Remove
			</button>
		</div>
	);
};
