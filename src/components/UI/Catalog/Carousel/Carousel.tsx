import { FC } from 'react';
import { IProduct } from '../../../../types/IProduct.interface';
import CarouselItem from './CarouselItem/CarouselItem';
import styles from './CarouselItem/CarouselItem.module.css';
import { useActions } from '../../../../hooks/useActions';
import Link from 'next/link';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const { addToCart, changeQuantity } = useActions();
	const cart = useTypedSelector((state) => state.cart);
	return (
		<div className={styles.carousel}>
			{products.map((item) => (
				<div className={styles.wrapper} key={item.id}>
					<button className={styles.button}>
						<CarouselItem product={item} />
					</button>
				</div>
			))}
		</div>
	);
};

export default Carousel;
