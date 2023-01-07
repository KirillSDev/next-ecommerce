import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';
import Logo from '../../assets/logo.svg';
import Link from 'next/link';
import { Menu } from '../../components/Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};
