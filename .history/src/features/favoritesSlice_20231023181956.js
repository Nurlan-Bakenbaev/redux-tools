import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorites: (state, action) => {
      const { payload: recipe } = action;
      const exists = state.some((r) => r.id === recipe.id);
      if (exists) {
        return state.filter((r) => r.id !== recipe.id);
      } else {
        state.push(recipe);
      }
    },
  },
});

export const { actions, reducer } = favoritesSlice;
