import { localStorageTypes, Person } from '@/models';
import { getLocalStorage, setLocalStorage } from '@/utilities';
import { createSlice } from '@reduxjs/toolkit';

//es un array de personas
const initialState: Person[] = [];

//el initial state si existe que lo revise de local stoarage, supongo para que haya persistencia
//cuando la app inicie y encuentre datos guardados
export const peopleSlice = createSlice({
  name: 'people',

  initialState: getLocalStorage(localStorageTypes.PEOPLE)
    ? JSON.parse(getLocalStorage(localStorageTypes.PEOPLE) as string)
    : initialState,
  reducers: {
    addPeople: (state, action) => {
      //es un key /value , key = "people" value es el state stringified
      //se agrega el estado a local storage
      setLocalStorage(localStorageTypes.PEOPLE, state);
      //el action.payload es la accion que le llegara desde cuando llamemos el estado
      return action.payload;
    },
  },
});
