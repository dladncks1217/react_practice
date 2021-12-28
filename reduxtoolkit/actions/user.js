import { createAsyncThunk } from "@reduxjs/toolkit";

const delay = (time, value) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value);
    }, time);
  });

const logIn = createAsyncThunk("user/login", async (data, thunkAPI) => {
  console.log(data);
  const result = await delay(500, {
    userId: 1,
    nickname: "임우찬",
  });

  return result;
});

export default logIn;
