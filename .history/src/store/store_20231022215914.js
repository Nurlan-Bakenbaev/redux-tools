import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "./favorites/favoritesSlice"
 export default const store = configureStore({
  reducer: {reducer},

});
