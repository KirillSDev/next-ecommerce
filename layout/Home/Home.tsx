import { FC, useState, Suspense } from 'react';
import React from 'react';
const Heading = React.lazy(() => import('../../components/UI/Heading/Heading'));
const Carousel = React.lazy(
	() => import('../../components/UI/Catalog/Catalog')
);
const Sorting = React.lazy(() => import('../../components/UI/Sorting/Sorting'));
import { products } from '../../data/products.data';

export const MainPage: FC = () => {
	const [sortType, setSortType] = useState('Default sorting');
	const getSortType = (type: string) => {
		setSortType(type);
	};
	return (
		<>
			<Suspense
				fallback={
					<div className='wrapper-spin'>
						<div className='spin-loading'></div>
					</div>
				}
			>
				<Heading>
					Our new taste <br /> is your new emotions
				</Heading>
				<Sorting getSortType={getSortType}></Sorting>
				<Carousel products={products} sortType={sortType} />
			</Suspense>
		</>
	);
};
