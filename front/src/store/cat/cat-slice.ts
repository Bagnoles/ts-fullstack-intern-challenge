import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { fetchCats, fetchCat, deleteLike } from '../api-actions';
import { Cat } from '../../types/cat.type';

type CatInitialStateType = {
    cats: {
        data: Cat[];
        isLoading: boolean;
        isError: boolean;
    },
    favoriteCats: Cat[]
}

const initialState: CatInitialStateType = {
    cats: {
        data: [],
        isLoading: false,
        isError: false
    },
    favoriteCats: []
}

export const catSlice = createSlice({
    name: NameSpace.Cat,
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCats.pending, (state) => {
                state.cats.isLoading = true;
                state.cats.isError = false;
            })
            .addCase(fetchCats.fulfilled, (state, action) => {
                state.cats.isLoading = false;
                state.cats.data = action.payload;
            })
            .addCase(fetchCats.rejected, (state) => {
                state.cats.isLoading = false;
                state.cats.isError = true;
            })
            .addCase(fetchCat.fulfilled, (state, action) => {
                if (state.favoriteCats.filter((cat) => cat.id === action.payload.id).length === 0) {
                    state.favoriteCats.push(action.payload);
                }
            })
            .addCase(deleteLike.fulfilled, (state, action) => {
                state.favoriteCats = state.favoriteCats.filter((item) => item.id !== action.payload);
            })
    },
});