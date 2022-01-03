import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  console.log(data);
  const result = await axios.get("http://localhost:8000");
  return result;
});

export const textToolkit = createAsyncThunk(
  "texts/change",
  async (data, thunkAPI) => {
    const result = await axios.get("http://localhost:8000");
    const dataCheck = {
      text: data.text,
      hi: data.hi,
      result: result.data,
    };
    console.log(dataCheck);
    return dataCheck;
  }
);
