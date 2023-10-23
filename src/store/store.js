import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducer } from "../features/favoritesSlice";

const reducers = combineReducers({
  favorites: favoriteReducer,
});
export const store = configureStore({
  reducer: reducers,
});
