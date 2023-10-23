import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "../features/favoritesSlice"


 export const store = configureStore({
  reducer: {reducer},

});
