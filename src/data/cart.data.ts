import { ICartItem } from '../types/ICartItem.interface';
import { products } from './products.data';

export const cartData: ICartItem[] = [
    {
        id: 1,
        product: products[0],
        quantity: 1
    },
    {
        id: 2,
        product: products[1],
        quantity: 1
    },
    {
        id: 3,
        product: products[2],
        quantity: 1
    },
    {
        id: 4,
        product: products[3],
        quantity: 1
    }
];