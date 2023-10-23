import { combineReducers, configureStore } from "@reduxjs/toolkit"
import {reducer} from "../features/favoritesSlice"

const reducers = combineReducers([])
 export const store = configureStore({
  reducer: reducer,

});
