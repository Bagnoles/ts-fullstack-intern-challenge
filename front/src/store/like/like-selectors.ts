import { State } from '..';
import { NameSpace } from '../../const';
import { Like } from '../../types/like.type';

export const getLikes = (state: Pick<State, NameSpace.Like>): Like[] => state[NameSpace.Like].likes.data;
export const getLikesLoadingStatus = (state: Pick<State, NameSpace.Like>): boolean => state[NameSpace.Like].likes.isLoading;
export const getLikesErrorStatus = (state: Pick<State, NameSpace.Like>): boolean => state[NameSpace.Like].likes.isError;