import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';



export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>  {
    children: ReactNode;
    apperance?: 'primary' | 'unprimary' | 'green';
    arrow?: 'none' | 'right' | 'down'
    
}