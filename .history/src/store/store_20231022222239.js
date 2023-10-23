import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as  } from "../features/favoritesSlice";

const reducers = combineReducers([reducer]);
export const store = configureStore({
  reducer: reducers,
});
