import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { State, store } from '.';
import { Cat } from '../types/cat.type';
import { saveToken } from '../services/token';
import { CAT_URL, LOCAL_URL } from '../const';
import { Like } from '../types/like.type';

const createAppAsyncThunk = createAsyncThunk.withTypes<{
  state: State;
  dispatch: typeof store.dispatch;
  extra: AxiosInstance;
}>();

export const fetchCats = createAppAsyncThunk<Cat[], undefined>('cats/getCats',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Cat[]>(`${CAT_URL}/images/search?limit=10`);
    return data;
  }
);

export const fetchLikes = createAppAsyncThunk<Like[], undefined>('likes/getLikes',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Like[]>(`${LOCAL_URL}/likes`);
    return data;
  }
);

export const createLike = createAppAsyncThunk<Like, Like>('likes/createLike',
  async (dto, {extra: api}) => {
    const {data} = await api.post<Like>(`${LOCAL_URL}/likes`, dto);
    return data;
  }
);

export const deleteLike = createAppAsyncThunk<string, string>('likes/deleteLike',
  async (catId, {extra: api}) => {
    await api.delete<string>(`${LOCAL_URL}/likes/${catId}`);
    return catId;
  }
);

export const fetchCat = createAppAsyncThunk<Cat, string>('cats/getCat',
  async (catId, {extra: api}) => {
    const {data} = await api.get<Cat>(`${CAT_URL}/images/${catId}`);
    return data;
  }
);

export const loginAction = createAppAsyncThunk<{token: string}, {login: string, password: string}>('user/login',
  async ({login, password}, {extra: api}) => {
    const {data} = await api.post<{token: string}>(`${LOCAL_URL}/user`, {login, password});
    saveToken(data.token);
    return data;
  }
);
