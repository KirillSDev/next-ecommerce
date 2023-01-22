import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';


export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    size?: 'small' | 'medium';
    children: ReactNode;
    color?: 'red' | 'gray' | 'green' | 'primary'
    link?: string;
}