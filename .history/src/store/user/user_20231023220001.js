import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";
import { getUserByID } from "./userAction";
export const userSlice = createSlice({
  name: "users",
  initialState: {
    isLoading: false,
    error: null,
    user: {},
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserByID.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getUserByID.fulfilled,
        (state, action) => {
         
      );
  },
});
