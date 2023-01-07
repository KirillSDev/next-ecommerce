import { FC, ReactNode, useState } from 'react';
import { ICartItem } from '../../../types/ICartItem.interface';
import styles from './CartActions.module.css';
import cn from 'classnames';
import { useDispatch } from 'react-redux';
import { cartSlice } from '../../../store/slice';

export const CartActions: FC<{
	children?: ReactNode;
	item: ICartItem;
}> = ({ item }) => {
	const [quantity, setQuantity] = useState(item.quantity);
	const [isClick, setIsClick] = useState(false);
	const dispatch = useDispatch();
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
						dispatch(
							cartSlice.actions.addToCart({
								id: item.id,
								product: {
									id: 6,
									name: 'losos',
									price: 234,
									description: 'ddefe',
									images: ['/public/images/products/sushi_with_eel.png']
								},
								quantity: 2
							})
						);
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
				onClick={() =>
					dispatch(cartSlice.actions.removeFromToCart({ id: item.id }))
				}
			>
				Remove
			</button>
		</div>
	);
};
