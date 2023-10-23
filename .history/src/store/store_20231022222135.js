import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "../features/favoritesSlice"

const reducers = 
 export const store = configureStore({
  reducer: reducer,

});
