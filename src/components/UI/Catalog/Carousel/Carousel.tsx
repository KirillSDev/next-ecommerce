import { FC } from 'react';
import { IProduct } from '../../../../types/IProduct.interface';
import CarouselItem from './CarouselItem/CarouselItem';
import styles from './CarouselItem/CarouselItem.module.css';
import { useActions } from '../../../../hooks/useActions';
import { useTypedSelector } from '../../../../hooks/useTypedSelector';
const Carousel: FC<{ products: IProduct[] }> = ({ products }) => {
	const { addToCart, changeQuantity } = useActions();
	const cart = useTypedSelector((state) => state.cart);
	return (
		<div className={styles.carousel}>
			{products.map((item) => (
				<button
					className={styles.button}
					key={item.id}
					onClick={() => {
						addToCart({ id: item.id, product: item, quantity: 1 });
					}}
				>
					<CarouselItem product={item} />
				</button>
			))}
		</div>
	);
};

export default Carousel;
