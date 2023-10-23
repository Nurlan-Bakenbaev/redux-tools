import { createSlice } from "@reduxjs/toolkit";
const initialstate = [];
export const favoritesSlice = createSlice({
  name: "favorites",
  initialstate,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const isExits = state.some((r) => r.id === recipe.id);
      if (isExits) {
         state state.filter((r) => r.id !== recipe.id);
      }
      state.push(recipe);
    },
  },
});
