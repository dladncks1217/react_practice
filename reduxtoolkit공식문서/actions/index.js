import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  console.log(data);
  const result = await axios.get("http://localhost:8000");
  return result;
});
