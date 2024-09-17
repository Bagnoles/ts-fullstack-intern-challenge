import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { Like } from '../../types/like.type';
import { createLike, deleteLike, fetchLikes } from '../api-actions';


type LikeInitialStateType = {
    likes: {
        data: Like[];
        isLoading: boolean;
        isError: boolean;
    }
}

const initialState: LikeInitialStateType = {
    likes: {
        data: [],
        isLoading: false,
        isError: false
    }
}

export const likeSlice = createSlice({
    name: NameSpace.Like,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchLikes.pending, (state) => {
                state.likes.isLoading = true;
                state.likes.isError = false;
            })
            .addCase(fetchLikes.fulfilled, (state, action) => {
                state.likes.isLoading = false;
                state.likes.data = action.payload;
            })
            .addCase(fetchLikes.rejected, (state) => {
                state.likes.isLoading = false;
                state.likes.isError = true;
            })
            .addCase(createLike.fulfilled, (state, action) => {
                state.likes.data.push(action.payload);
            })
            .addCase(deleteLike.fulfilled, (state, action) => {
                state.likes.isLoading = false;
                state.likes.data = state.likes.data.filter((item) => item.cat_id !== action.payload);
            })
    },
});