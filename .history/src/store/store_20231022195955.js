import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "./favorites/favoritesSlice"
 export const store = configureStore({
  reducer: {reducer},

});
