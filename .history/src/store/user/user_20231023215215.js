import { createSlice } from "@reduxjs/toolkit";
import { build } from "vite";
export const userSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {},
  extraReducers:builder =>{
    builder.addCase(getUser)
  }
});
