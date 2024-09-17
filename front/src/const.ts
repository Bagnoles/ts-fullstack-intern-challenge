export const CAT_URL = 'https://api.thecatapi.com/v1';
export const LOCAL_URL = 'http://localhost:8080/api';

export const AppRoutes = {
    Main: '/',
    Favorite: '/favorite'
} as const;

export enum NameSpace {
    Cat = 'CAT',
    Like = 'LIKE'
}

