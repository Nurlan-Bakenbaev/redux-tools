import { createSlice } from "@reduxjs/toolkit";
const initialstate = [];
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const recipe = action.payload;
      state.favoritesSlice.push(recipeId)
    },
  },
});
