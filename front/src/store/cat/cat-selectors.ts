import { State } from '..';
import { NameSpace } from '../../const';
import { Cat } from '../../types/cat.type';

export const getCats = (state: Pick<State, NameSpace.Cat>): Cat[] => state[NameSpace.Cat].cats.data;
export const getLoadingStatus = (state: Pick<State, NameSpace.Cat>): boolean => state[NameSpace.Cat].cats.isLoading;
export const getErrorStatus = (state: Pick<State, NameSpace.Cat>): boolean => state[NameSpace.Cat].cats.isError;