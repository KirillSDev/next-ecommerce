import { FC } from 'react';
import { HeaderProps } from './Header.props';
import { Menu } from '../../components/Menu/Menu';
import HeaderMobile from '../../components/HeaderMobile/HeaderMobile';
import styles from './Header.module.css';
export const Header: FC<HeaderProps> = ({ ...props }): JSX.Element => {
	return (
		<div {...props}>
			<div className={styles['header-desktop']}>
				<Menu />
			</div>
			<div className={styles['header-mobile']}>
				<HeaderMobile />
			</div>
		</div>
	);
};
