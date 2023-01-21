import { motion } from 'framer-motion';
import { FC } from 'react';
import Cart from '../Cart/Cart';
import MenuItem from '../Menu/Menu-item/MenuItem';
import { menuData } from '../Menu/menu.data';
import styles from './HeaderMobile.module.css';
import { useAnimation } from 'framer-motion';
import { Button } from '../Button/Button';
const HeaderMobile: FC = () => {
	const controls = useAnimation();
	return (
		<div className={styles.container}>
			<div className={styles.navigation}>
				<Button
					className={styles.button}
					onClick={() => controls.start({ width: '100vw' })}
				>
					Menu
				</Button>

				<motion.div className={styles.sidepanel} animate={controls}>
					<Button
						className={styles['close-btn']}
						onClick={() => controls.start({ width: '0' })}
					>
						X
					</Button>
					{menuData.map((item) => {
						return <MenuItem key={item.link} item={item} />;
					})}
				</motion.div>
			</div>
			<div className={styles.cart}>
				<Cart></Cart>
			</div>
		</div>
	);
};

export default HeaderMobile;
