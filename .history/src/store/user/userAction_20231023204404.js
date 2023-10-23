import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUserByID = (userID) => {
  new Promise((resolve) => 
  setTimeout(() => resolve({ id: 1, name:'nurlan' }), 1000));
};
export const getUserByID = createAsyncThunk('users/by-id',async(userID)=>{

})