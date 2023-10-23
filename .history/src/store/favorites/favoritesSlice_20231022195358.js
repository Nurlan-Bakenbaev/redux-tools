import { createSlice } from "@reduxjs/toolkit";
const npm install react-redux = [];
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, { payload: recipe }) => {
      const isExits = state.some((r) => r.id === recipe.id);
      if (isExits) {
        state.filter((r) => r.id !== recipe.id);
      }
      state.push(recipe);
    },
  },
});
