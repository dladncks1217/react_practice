import { createSlice } from "@reduxjs/toolkit";

import logIn from "../actions/user";

const initialState = {
  isLoggingIn: false,
  data: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: {
    [logIn.pending](state, action) {
      state.isLoggingIn = true; // user/login/pending
    },
    [logIn.fulfilled](state, action) {
      // action에 들어있는 데이터는 payload임.
      state.data = action.payload; // user/login/fulfilled
      state.isLoggingIn = false;
    },
    [logIn.rejected](state, action) {
      state.data = null; // user/login/rejected
      state.isLoggingIn = false;
    },
  },
});

export default userSlice;
