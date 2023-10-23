import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoriteReducers } from "../features/favoritesSlice";

const reducers = combineReducers({
  
});
export const store = configureStore({
  reducer: reducers,
});
