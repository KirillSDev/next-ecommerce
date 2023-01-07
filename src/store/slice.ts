import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { cartData } from '../data/cart.data';
import { ICartItem } from '../types/ICartItem.interface';
import { IChangeQuantityPayload } from './types';

interface IInitialState {
    items: ICartItem[]
}

const initialState: IInitialState = {
    items: cartData
};
export const cartSlice = createSlice ({
 name: 'cart',
 initialState,
 reducers: {
    addToCart: (state, action: PayloadAction<ICartItem>) => {
        const id = state.items.length;
        state.items.push({...action.payload, id});
    },
    removeFromToCart: (state, action: PayloadAction<{id: number}>) => {
        state.items = state.items.filter(item=>item.id !== action.payload.id );
    },
    changeQuantity: (state,action: PayloadAction<IChangeQuantityPayload>) => {
       const {id, type} = action.payload;
       const item = state.items.find(item => item.id === id);
       if (item) type === 'minus'?item.quantity--:item.quantity++;


    }
 },

});