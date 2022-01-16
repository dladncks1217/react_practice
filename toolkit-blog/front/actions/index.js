import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const join = createAsyncThunk("user/join", async (data, thunkAPI) => {
  const result = await axios.post("http://localhost:8000/user/join", {
    name: data.name,
    email: data.email,
    password: data.password,
  });
  return result;
});
