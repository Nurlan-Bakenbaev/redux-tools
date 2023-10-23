import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserById = (userID) => {
  new Promise((resolve) =>
    setTimeout(() => resolve({ id: 1, name: "nurlan" }), 1000)
  );
};
export const getUserByID = createAsyncThunk(
  "users/by-id",
  async (userId, thunkApi) => {
    const responce = await (fetchUserById())
  }
);
