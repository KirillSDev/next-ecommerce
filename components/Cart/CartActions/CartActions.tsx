import { FC, ReactNode, useState } from 'react';
import { ICartItem } from '../../../types/ICartItem.interface';
import styles from './CartActions.module.css';
import cn from 'classnames';
import { useActions } from '../../../hooks/useActions';

export const CartActions: FC<{
	children?: ReactNode;
	item: ICartItem;
}> = ({ item }) => {
	const [isClick, setIsClick] = useState(false);
	const { removeFromToCart, changeQuantity } = useActions();
	return (
		<div className={styles['cart-actions']}>
			<button
				className={cn(styles.button, {
					[styles['button-click']]: isClick === true,
					[styles['button-unclick']]: isClick === false
				})}
				onClick={() => {
					if (item.quantity < 1) {
						removeFromToCart({ id: item.id });
					} else if (item.quantity > 0) {
						changeQuantity({ type: 'minus', id: item.id });
					}
					setIsClick(true);
					setTimeout(() => {
						setIsClick(false);
					}, 100);
				}}
			>
				-
			</button>
			<div>{item.quantity}</div>
			<button
				className={cn(styles.button, {
					[styles['button-click']]: isClick === true,
					[styles['button-unclick']]: isClick === false
				})}
				onClick={() => {
					if (item.quantity < 5) {
						changeQuantity({ type: 'plus', id: item.id });
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
