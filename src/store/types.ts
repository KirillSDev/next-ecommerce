import { ICartItem } from '../types/ICartItem.interface';

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
    type: 'minus' | 'plus';
}