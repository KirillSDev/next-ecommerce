import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { IProduct } from '../../../types/IProduct.interface';

export interface RatingProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    rating: number;
    isEditable?:boolean;
    setRating?: (rating: number)=>void;
}