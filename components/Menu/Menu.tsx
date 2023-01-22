import { FC } from 'react';
import MenuItem from './Menu-item/MenuItem';
import { menuData } from './menu.data';
import Link from 'next/link';
import Logo from '../../assets/logo.svg';
import styles from './Menu.module.css';
import { SearchMenu } from '../Search/Search';
import Cart from '../Cart/Cart';

export const Menu: FC = () => {
	return (
		<div>
			<div className={styles.container}>
				<Link href='/'>
					<Logo alt='logo' width={100} height={100} className={styles.logo} />
				</Link>
				<SearchMenu className={styles.search} />
				<button className={styles.button}>Hello</button>
				<div className={styles.sidepanel}>
					{menuData.map((item) => {
						return <MenuItem key={item.link} item={item} />;
					})}
				</div>
				<div className={styles.cart}>
					<Cart></Cart>
				</div>
			</div>
		</div>
	);
};
