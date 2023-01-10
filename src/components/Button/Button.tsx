import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';

export const Button = ({
	apperance,
	children,
	arrow = 'none',
	className,
	...props
}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: apperance == 'primary',
				[styles.unprimary]: apperance == 'unprimary',
				[styles.green]: apperance == 'green'
			})}
			{...props}
		>
			{children}
			{arrow !== 'none' && (
				<ArrowIcon
					alt='arrow'
					className={cn(styles.arrow, {
						[styles.arrowDown]: arrow == 'down',
						[styles.arrowRight]: arrow == 'right'
					})}
				/>
			)}
		</button>
	);
};
