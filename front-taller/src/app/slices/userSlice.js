import { createSlice } from '@reduxjs/toolkit';

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from '../../utils/storage';

const initialState = {
  loggedUser: getFromLocalStorage('appUser'),
  deptos: [],
  ciudades: [],
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setLoginUser: (state, action) => {
      const { payload } = action;
      state.loggedUser = payload;
      setInLocalStorage('appUser', JSON.stringify(payload));
    },
    setLogoutUser: (state) => {
      state.loggedUser = null;
      removeFromLocalStorage('appUser');
    },
    setDeptos: (state, action) => {
      const { payload } = action;
      state.deptos = payload;
    },
    setCiudades: (state, action) => {
      const { payload } = action;
      state.ciudades = payload;
    },
  },
});

export const { setLoginUser, setLogoutUser, setDeptos, setCiudades } =
  userSlice.actions;
export default userSlice.reducer;
