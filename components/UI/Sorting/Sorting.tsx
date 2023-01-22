import { FC } from 'react';
import styles from './Sorting.module.css';
import { useState, useEffect } from 'react';
import cn from 'classnames';
import { sortingData } from './sorting.data';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';

const Sorting: FC<{ getSortType: (type: string) => void }> = ({
	getSortType
}) => {
	const [isActiveDrop, setIsActiveDrop] = useState(false);
	const [sortType, setSortType] = useState('Default sorting');
	const controls = useAnimation();
	useEffect(() => {
		getSortType(sortType);
	}, [getSortType, sortType]);
	return (
		<div className={styles.grid}>
			<div className={styles.container}>
				<button
					className={styles['drop-btn']}
					onClick={() => {
						controls.start({ opacity: [0, 1], visibility: 'visible' });
						isActiveDrop &&
							controls.start({ opacity: [1, 0], visibility: 'hidden' });
						setIsActiveDrop(!isActiveDrop);
					}}
				>
					{sortType}
				</button>
				<AnimatePresence>
					<motion.div
						animate={controls}
						initial={{ visibility: 'hidden' }}
						className={cn(styles['dropdown-content'])}
					>
						{sortingData.map((sort) => (
							<a
								href='#'
								className={styles['dropdown-content-active']}
								key={sort.value}
								onClick={() => {
									setSortType(sort.name);

									setIsActiveDrop(!isActiveDrop);
									isActiveDrop &&
										controls.start({ opacity: [1, 0], visibility: 'hidden' });
								}}
							>
								{sort.name}
							</a>
						))}
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

export default Sorting;
