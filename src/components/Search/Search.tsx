import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from './Search.module.css';

interface ISearchMenu
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}
export const SearchMenu = ({ ...props }: ISearchMenu) => {
	const [searchTerm, setSearchTerm] = useState('');
	return (
		<div {...props}>
			<input
				className={styles.search}
				placeholder='Search'
				onChange={(e) => setSearchTerm(e.target.value)}
				value={searchTerm}
			/>
		</div>
	);
};
