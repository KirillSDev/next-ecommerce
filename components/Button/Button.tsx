import { forwardRef, ForwardedRef } from 'react';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import cn from 'classnames';
import { motion } from 'framer-motion';
import React from 'react';

export const Button = forwardRef(
	(
		{ apperance, children, arrow = 'none', className, ...props }: ButtonProps,
		ref: ForwardedRef<HTMLButtonElement>
	): JSX.Element => {
		return (
			<button
				ref={ref}
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
	}
);

Button.displayName = 'Button';

export const AnimationButton = motion(Button);
