import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, store } from '.';
import { Cat } from '../types/cat.type';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: State;
    dispatch: typeof store.dispatch;
    extra: AxiosInstance;
}>();

export const fetchCats = createAppAsyncThunk<Cat[], undefined>('cats/getCats',
    async (_arg, {extra: api}) => {
      const {data} = await api.get<Cat[]>('/images/search?limit=10');
      return data;
    }
);
