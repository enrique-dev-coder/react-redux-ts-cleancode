import { Person } from '@/models';
import { configureStore } from '@reduxjs/toolkit';
import { favoriteSlice, peopleSlice } from './states';

//interfaz de tipos
export interface AppStore {
  people: Person[];
  favorites: Person[];
}

export default configureStore<AppStore>({
  reducer: {
    people: peopleSlice.reducer,
    favorites: favoriteSlice.reducer,
  },
});
