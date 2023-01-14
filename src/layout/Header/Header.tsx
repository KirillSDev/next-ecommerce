import { FC } from 'react';
import { HeaderProps } from './Header.props';
import { Menu } from '../../components/Menu/Menu';

export const Header: FC<HeaderProps> = ({ ...props }): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};
