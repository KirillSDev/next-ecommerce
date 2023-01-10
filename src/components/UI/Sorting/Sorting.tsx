import { FC } from 'react';
import styles from './Sorting.module.css';
import { useState } from 'react';
import cn from 'classnames';
import { sortingData } from './sorting.data';
import { EnumSorting } from './sorting.interface';

const Sorting: FC = () => {
	const [isActiveDrop, setIsActiveDrop] = useState(false);
	const [sortType, setSortType] = useState('Default sorting');
	return (
		<div className={styles.grid}>
			<div className={styles.container}>
				<button
					className={styles['drop-btn']}
					onClick={() => setIsActiveDrop(!isActiveDrop)}
				>
					{sortType}
				</button>
				<div
					className={cn(styles['dropdown-content'], {
						[styles['dropdown-content-active']]: isActiveDrop === true
					})}
				>
					{sortingData.map((sort) => (
						<a
							href='#'
							key={sort.value}
							onClick={() => {
								setSortType(sort.name);
								setIsActiveDrop(!isActiveDrop);
							}}
						>
							{sort.name}
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Sorting;
