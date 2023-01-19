import React from 'react';
import { DetailedHTMLProps, HTMLAttributes, useState, useEffect } from 'react';
import styles from './Search.module.css';
import IconSearch from '../../assets/icons/search.svg';
import Link from 'next/link';
import { useActions } from '../../hooks/useActions';

interface ISearchMenu
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

export const SearchMenu = ({ ...props }: ISearchMenu) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [isClick, setIsClick] = useState(false);
	const inputRef = React.useRef<HTMLAnchorElement>(null);
	const { addToArray } = useActions();
	useEffect(() => {
		setSearchTerm('');
	}, [isClick]);
	return (
		<div {...props}>
			<div className={styles.container}>
				<input
					className={styles.search}
					placeholder='Search'
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
					onKeyDown={(event) => {
						if (event.key == 'Enter') {
							inputRef.current?.click(); // call Link
							addToArray({ item: searchTerm });
							setIsClick(!isClick);
						}
					}}
				/>
				<Link
					ref={inputRef}
					href={'/result'}
					onClick={() => {
						addToArray({ item: searchTerm });
						setIsClick(!isClick);
					}}
				>
					<IconSearch
						width={20}
						height={20}
						className={styles['container-icon']}
					></IconSearch>
				</Link>
			</div>
		</div>
	);
};
