import { ICartItem } from '../types/ICartItem.interface';
import { products } from './products.data';

export const cartData: ICartItem[] = [
    {
        id: 1,
        product: products[0],
        quantity: 1
    },
    {
        id: 1,
        product: products[1],
        quantity: 1
    }
];