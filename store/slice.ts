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
        const id = action.payload.id;
        const itemFound = state.items.find(el=>el.id === id);
        itemFound?itemFound.quantity++:state.items.push({...action.payload, id});
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

interface IInitialStateSearch {
    item: string
}

const initialStateSearch: IInitialStateSearch =  {
   item: ''
};
export const searchSlice = createSlice ({
    name: 'search',
    initialState: initialStateSearch,
    reducers: {
      addToArray: (state, action: PayloadAction<{item: string}>) => {
       state.item = action.payload.item;},
      removeFromArray: (state) => {
        state.item='';
    },
}
   });