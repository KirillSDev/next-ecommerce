import { FC, useEffect } from 'react';
import { IProduct } from '../../../../types/IProduct.interface';
import CarouselItem from './CarouselItem/CarouselItem';
import styles from './CarouselItem/CarouselItem.module.css';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Carousel: FC<{ products: IProduct[]; sortType: string }> = ({
	products,
	sortType
}) => {
	const search = useTypedSelector((state) => state.search);
	const controls = useAnimation();
	const sortTypeFunc = (sort: string) => {
		switch (sort) {
			case 'Price: Low to High':
				return products.sort((a, b) => a.price - b.price);
				break;

			case 'Price: High to Low':
				return products.sort((a, b) => b.price - a.price);
				break;

			case 'Newest':
				return products.sort((a, b) => b.id - a.id);
				break;

			case 'Oldest':
				return products.sort((a, b) => a.id - b.id);
				break;

			default:
				return products;
				break;
		}
	};

	useEffect(() => {
		controls.start({
			y: [-100, 0],
			opacity: [0, 1]
		});
	}, [sortType, search.item]);
	return (
		<motion.div viewport={{ amount: 0 }} className={styles.carousel}>
			{sortTypeFunc(sortType).map((item, index) => (
				<motion.div
					initial={{
						y: -100,
						opacity: 0
					}}
					transition={{ delay: index / 10 }}
					className={styles.wrapper}
					animate={controls}
					key={item.id}
				>
					<div className={styles.button}>
						<CarouselItem product={item} />
					</div>
				</motion.div>
			))}
		</motion.div>
	);
};

export default React.memo(Carousel);
