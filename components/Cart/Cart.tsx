import { FC } from 'react';
import { cartData } from '../../data/cart.data';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';

const Cart: FC = () => {
	return (
		<>
			<button className={styles.cart}>Cart</button>
			<div id='5' className={styles.containerCart}>
				{cartData.map((cart) => {
					return <CartItem key={cart.id} item={cart} />;
				})}
			</div>
		</>
	);
};

export default Cart;
