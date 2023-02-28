import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rubros: [],
};

const movisSlice = createSlice({
  name: 'rubrosSlice',
  initialState,
  reducers: {
    setRubros: (state, action) => {
      const { payload } = action;
      state.rubros = payload;
    }
  },
});

export const {
  setRubros,
} = movisSlice.actions;
export default movisSlice.reducer;
