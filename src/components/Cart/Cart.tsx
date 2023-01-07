import { FC, useState } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import { Button } from '../Button/Button';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cart = useTypedSelector((state) => state.cart.items);
	const total = cart.reduce(
		(acc, item) => (acc += item.product.price * item.quantity),
		0
	);
	return (
		<div className={styles.cart}>
			<Button
				apperance='unprimary'
				arrow={isOpen ? 'down' : 'right'}
				className={styles.button}
				onClick={() => setIsOpen(!isOpen)}
			>
				Cart
			</Button>
			{isOpen && (
				<div className={styles.wrapperCart}>
					<div className={styles.containerCart}>
						<div className={styles.absoluteCart}>
							{cart.map((cart) => {
								return <CartItem key={cart.id} item={cart} />;
							})}
							<div className={styles.total}>
								<span>Total:</span>
								<span>{'$' + total.toFixed(2)}</span>
							</div>
							<Button apperance='primary' className={styles.checkout}>
								Checkout
							</Button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
