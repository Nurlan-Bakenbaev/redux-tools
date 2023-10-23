import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "./favorites/favoritesSlice"
 export default store = configureStore({
  reducer: {reducer},

});
