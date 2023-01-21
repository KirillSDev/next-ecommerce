import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from 'react';
import styles from './Heading.module.css';
import cn from 'classnames';

interface IHeading
	extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
	children: ReactNode;
}

const Heading: FC<IHeading> = ({ children, ...props }) => {
	return (
		<div className={cn(styles.container, { ...props })}>
			<h1 className={styles.heading}>{children}</h1>
		</div>
	);
};

export default Heading;
