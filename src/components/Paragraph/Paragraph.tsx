import styles from './Paragraph.module.css';
import { ParagraphProps } from './Paragraph.props';
import cn from 'classnames';

export const Paragraph = ({
	size = 'medium',
	children,
	...props
}: ParagraphProps): JSX.Element => {
	return (
		<>
			<p
				className={cn(styles.paragraph, {
					[styles.small]: size == 'small',
					[styles.middle]: size == 'medium',
					[styles.big]: size == 'big',
				})}
				{...props}
			>
				{children}
			</p>
		</>
	);
};
