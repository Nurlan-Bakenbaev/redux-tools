import { createSlice } from "@reduxjs/toolkit";
const initialstate = [];
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {},
  },
});
