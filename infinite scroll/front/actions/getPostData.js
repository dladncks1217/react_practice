import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

export const getPosts = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      let result = await axios({
        method: "post",
        url: "/getposts",
        data: {
          start: data.start,
          end: data.start + 10,
        },
      });
      return result;
    } catch (err) {
      console.error(err);
    }
  }
);
