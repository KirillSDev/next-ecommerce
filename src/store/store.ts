import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {cartSlice} from './slice';

const rootReducer = combineReducers({
    cart: cartSlice.reducer
});


export const store = configureStore({
    reducer: rootReducer
});

export type RootState = ReturnType<typeof rootReducer>;