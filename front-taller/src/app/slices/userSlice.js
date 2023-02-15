import { createSlice } from '@reduxjs/toolkit';

import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setInLocalStorage,
} from '../../utils/storage';

const initialState = {
  loggedUser: getFromLocalStorage('appUser'),
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
  },
});

export const { setLoginUser, setLogoutUser } = userSlice.actions;
export default userSlice.reducer;
