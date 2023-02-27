import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movimientos: [],
  filteredMovimientos: [],
  rubros: [],
};

const movisSlice = createSlice({
  name: 'movimientos',
  initialState,
  reducers: {
    setMovimientos: (state, action) => {
      const { payload } = action;
      state.movimientos = payload;
    },
    setFilteredMovimientos: (state, action) => {
      const { payload } = action;
      state.filteredMovimientos = payload;
    },
    addMovimiento: (state, action) => {
      const { payload } = action;
      state.movimientos = [...state.movimientos, payload];
      state.filteredMovimientos = [...state.filteredMovimientos, payload];
    },
    deleteMovimientoById: (state, action) => {
      const { payload } = action;
      const newmovimientoList = state.movimientos.filter(
        (mov) => mov.id !== payload
      );
      state.movimientos = newmovimientoList;
      state.filteredMovimientos = newmovimientoList;
    },
    setRubros: (state, action) => {
      const { payload } = action;
      state.rubros = payload;
    }
  },
});

export const {
  setMovimientos,
  setFilteredMovimientos,
  addMovimiento,
  deleteMovimientoById,
  setRubros
} = movisSlice.actions;
export default movisSlice.reducer;
