import styles from './Rating.module.css';
import cn from 'classnames';
import { RatingProps } from './Rating.props';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';

export const Rating = ({
	isEditable = true,
	setRating,
	rating,
	...props
}: RatingProps): JSX.Element => {
	const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
		new Array(5).fill(<></>)
	);
	useEffect(() => {
		constructorRating(rating);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [rating]);
	const constructorRating = (currentRating: number) => {
		const updateArray = ratingArray.map((el: JSX.Element, idx: number) => {
			return (
				<span
					key={idx}
					className={cn(styles.star, {
						[styles.fill]: idx < currentRating
					})}
					onMouseEnter={() => changeDisplay(idx + 1)} //
					onMouseLeave={() => changeDisplay(rating)} //
					onClick={() => clickRating(idx + 1)}
				>
					<StarIcon
						tabIndex={isEditable ? 0 : -1}
						onKeyDown={(event: KeyboardEvent<SVGAElement>) =>
							isEditable && handleSpace(idx + 1, event)
						}
					/>
				</span>
			);
		});
		setRatingArray(updateArray);
	};
	const changeDisplay = (el: number) => {
		if (!isEditable) {
			return;
		}
		constructorRating(el);
	};
	const clickRating = (el: number) => {
		if (!isEditable || !setRating) {
			return;
		}
		setRating(el);
	};
	const handleSpace = (el: number, event: KeyboardEvent<SVGAElement>) => {
		if (event.code != 'Space' || !setRating) {
			return;
		}
		setRating(el);
	};
	return (
		<div {...props}>
			{ratingArray.map((el: JSX.Element, idx: number) => (
				<span key={idx}>{el}</span>
			))}
		</div>
	);
};
