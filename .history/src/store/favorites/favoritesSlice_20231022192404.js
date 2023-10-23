import { createSlice } from "@reduxjs/toolkit";
const initialstate = [];
export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addToFavorites: (state, action) => {
      const recipeId = action.payload;
      
    },
  },
});
