import { FC } from 'react';
import { IMenuLink } from './MenuItem.props';
import styles from './MenuItem.module.css';
import Link from 'next/link';

interface IMenuItem {
	item: IMenuLink;
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
	return (
		<li className={styles.item}>
			<Link href={item.link}>{item.name}</Link>
		</li>
	);
};

export default MenuItem;
