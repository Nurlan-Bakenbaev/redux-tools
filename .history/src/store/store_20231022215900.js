import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "./favorites/favoritesSlice"
 export de const store = configureStore({
  reducer: {reducer},

});
