import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { catSlice } from './cat/cat-slice';
import { likeSlice } from './like/like-slice';

export const rootReducer = combineReducers({
    [NameSpace.Cat]: catSlice.reducer,
    [NameSpace.Like]: likeSlice.reducer
});
