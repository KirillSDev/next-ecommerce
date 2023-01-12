import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { cartSlice, searchSlice } from '../store/slice';


const RootActions = {
    ...cartSlice.actions,
    ...searchSlice.actions
};

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(()=>bindActionCreators(RootActions,dispatch),[dispatch]);
};