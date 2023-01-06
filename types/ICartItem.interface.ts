import { IProduct } from './IProduct.interface';
export interface ICartItem {
    id: number;
    product: IProduct;
    quantity: number;
}