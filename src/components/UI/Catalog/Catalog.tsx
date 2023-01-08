import { FC } from 'react';
import { IProduct } from '../../../types/IProduct.interface';
import Carousel from './Carousel/Carousel';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface Catalog
	extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

const Catalog: FC<{
	products: IProduct[];
	props?: Catalog;
	className: string;
}> = ({ products, className }) => {
	return (
		<div className={className}>
			<Carousel products={products} />
		</div>
	);
};

export default Catalog;
