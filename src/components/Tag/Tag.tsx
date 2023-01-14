import styles from './Tag.module.css';
import { TagProps } from './Tag.props';
import cn from 'classnames';

export const Tag = ({
	size = 'medium',
	children,
	color = 'primary',
	link,
	...props
}: TagProps): JSX.Element => {
	return (
		<div
			className={cn(styles.tag, {
				[styles.small]: size == 'small',
				[styles.medium]: size == 'medium',
				[styles.red]: color == 'red',
				[styles.gray]: color == 'gray',
				[styles.green]: color == 'green',
				[styles.primary]: color == 'primary',
			})}
			{...props}
		>
			{link ? <a href={link}>{children}</a> : <>{children}</>}
		</div>
	);
};
