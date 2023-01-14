import {configureStore, combineReducers} from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {cartSlice, searchSlice} from './slice';

const rootReducer = combineReducers({
    cart: cartSlice.reducer,
    search: searchSlice.reducer
});
const persistConfig = {
    key: 'sushi-shop',
    storage,
    whitelist: ['cart','search']
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);


export type RootState = ReturnType<typeof rootReducer>;