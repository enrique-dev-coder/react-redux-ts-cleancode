import { localStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

//es un array de personas
const initialState: Person[] = [];

//el initial state si existe que lo revise de local stoarage, supongo para que haya persistencia
//cuando la app inicie y encuentre datos guardados
export const favoriteSlice = createSlice({
  name: 'favorites',

  initialState: getLocalStorage(localStorageTypes.FAVORITES)
    ? JSON.parse(getLocalStorage(localStorageTypes.FAVORITES) as string)
    : initialState,
  reducers: {
    addFavorite: (state, action) => {
      setLocalStorage(localStorageTypes.FAVORITES, state);
      return action.payload;
    },
  },
});
