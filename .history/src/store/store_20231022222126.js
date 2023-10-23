import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "../features/favoritesSlice"

const 
 export const store = configureStore({
  reducer: reducer,

});
