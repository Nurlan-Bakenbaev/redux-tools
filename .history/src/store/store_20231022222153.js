import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer } from "../features/favoritesSlice";

const reducers = combineReducers([reducer]);
export const store = configureStore({
  reducer: reducers,
});
