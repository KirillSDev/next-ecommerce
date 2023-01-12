import { FC, HTMLAttributes } from 'react';
import { IProduct } from '../../../../../types/IProduct.interface';
import Image from 'next/image';
import styles from './CarouselItem.module.css';
import Link from 'next/link';
import cn from 'classnames';

const isActive = false;
const CarouselItem: FC<{ product: IProduct }> = ({ product }) => {
	return (
		<div className={styles.container}>
			<div
				className={cn(styles['container-header'], {
					[styles['container-active']]: isActive
				})}
			>
				<Image
					className={styles['item-image']}
					src={product.images[0]}
					alt={product.name}
					width={220}
					height={150}
				></Image>
				<div className={styles['container-info']}>
					<div className={styles.name}>{product.name}</div>
					<div className={styles.description}>{product.description}</div>
					<div className={styles.price}>{'Price: ' + product.price + ' $'}</div>
					<Link className={styles.link} href={`/product/${product.slug}`}>
						More information
					</Link>
				</div>
			</div>
			<div className={styles['add-item']}></div>
		</div>
	);
};
export default CarouselItem;
