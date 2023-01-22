import { FC, useEffect, useMemo } from 'react';
import { IProduct } from '../../../../types/IProduct.interface';
import dynamic from 'next/dynamic';
const CarouselItem = dynamic(() => import('./CarouselItem/CarouselItem'));

import styles from './CarouselItem/CarouselItem.module.css';

import { useTypedSelector } from '../../../../hooks/useTypedSelector';
import { motion, useAnimation } from 'framer-motion';
import React from 'react';

const Carousel: FC<{ products: IProduct[]; sortType?: string }> = ({
	products,
	sortType = 'Newest'
}) => {
	const search = useTypedSelector((state) => state.search);
	const controls = useAnimation();

	useEffect(() => {
		controls.start({
			y: [-100, 0],
			opacity: [0, 1]
		});
	}, [sortType, search.item, controls]);

	const catalogProduct: JSX.Element[] = useMemo(() => {
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
		return sortTypeFunc(sortType).map((item, index) => (
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
		));
	}, [sortType, controls, products]);
	return (
		<motion.div viewport={{ amount: 0 }} className={styles.carousel}>
			{catalogProduct}
		</motion.div>
	);
};

export default Carousel;
