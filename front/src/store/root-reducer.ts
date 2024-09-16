import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { catSlice } from './cat/cat-slice';

export const rootReducer = combineReducers({
    [NameSpace.Cat]: catSlice.reducer
});
