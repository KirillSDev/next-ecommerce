import { FC, useState, useEffect } from 'react';
import styles from './Cart.module.css';
import CartItem from './CartItem/CartItem';
import { AnimationButton } from '../Button/Button';
import { Button } from '../Button/Button';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const Cart: FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const cart = useTypedSelector((state) => state.cart.items);
	const total = cart.reduce(
		(acc, item) => (acc += item.product.price * item.quantity),
		0
	);

	const controls = useAnimation();
	useEffect(() => {
		if (isOpen && cart.length === 0)
			setTimeout(() => {
				setIsOpen(!isOpen);
			}, 2000);
	});
	return (
		<div className={styles.cart}>
			<AnimatePresence>
				<AnimationButton
					animate={controls}
					apperance='unprimary'
					arrow={isOpen ? 'down' : 'right'}
					className={styles.button}
					onClick={() => {
						setIsOpen(!isOpen);
						controls.start({
							scaleX: [1, 1.4, 1],

							transition: { duration: 0.1 }
						});
					}}
				>
					{cart.length ? (
						<div className={styles['count-cart']}>{cart.length}</div>
					) : (
						''
					)}
					Cart
				</AnimationButton>
			</AnimatePresence>

			<AnimatePresence>
				{isOpen && (
					<motion.div
						className={styles.wrapperCart}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
					>
						<div className={styles.containerCart}>
							<div className={styles.absoluteCart}>
								<AnimatePresence>
									{cart.length ? (
										<AnimatePresence>
											{cart.map((cart) => {
												return (
													<motion.div
														key={cart.id}
														initial={{ height: 0, opacity: 0 }}
														animate={{ height: 'auto', opacity: 1 }}
														exit={{ height: 0, opacity: 0 }}
														transition={{ duration: 0.2 }}
													>
														<CartItem item={cart} />
													</motion.div>
												);
											})}
											<div>
												<div className={styles.total}>
													<span>Total:</span>
													<span>{'$' + total.toFixed(2)}</span>
												</div>
												<Button apperance='green' className={styles.checkout}>
													Checkout
												</Button>
											</div>
										</AnimatePresence>
									) : (
										<AnimatePresence>
											<div className={styles['cart-empty']}>Cart is empty</div>
										</AnimatePresence>
									)}
								</AnimatePresence>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Cart;
