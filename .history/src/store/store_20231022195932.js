import { configureStore } from "@reduxjs/toolkit"
import {reducer} from "./favorites"
 export const store = configureStore({
  reducer: {reducer},

});
