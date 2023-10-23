import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";
import { getUserByID } from "./userAction";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading:false
  },
  reducers: {},
  extraReducers:builder =>{
    builder.addCase(getUserByID.pending,state)
  }
});
