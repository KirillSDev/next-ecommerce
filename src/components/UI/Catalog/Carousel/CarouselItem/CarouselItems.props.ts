import { ICartItem } from '../../../../../types/ICartItem.interface';
import {DetailedHTMLProps, HTMLAttributes}from 'react';
export interface ICarouselItems extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    item: ICartItem;
}


