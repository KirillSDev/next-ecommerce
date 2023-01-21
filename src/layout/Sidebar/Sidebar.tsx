import { SidebarProps } from './Sidebar.props';
import { Menu } from '../../components/Menu/Menu';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
	return (
		<div {...props}>
			<Menu />
		</div>
	);
};
