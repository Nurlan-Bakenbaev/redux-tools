import { createSlice } from "@reduxjs/toolkit";
const initialstate = [];
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleToFavorites: (state, action) => {
      const recipe = action.payload;
      state.favoritesSlice.push(recipe)
    },
  },
});
