import { createSlice } from "@reduxjs/toolkit";
import { logIn } from "../actions";

const initialState = {
  email: null,
  password: null,
  isLoggingIn: false,
  logInRejectedReason: null,
};

export const logInSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: {
    [logIn.pending](state, action) {
      state.isLoggingIn = true;
    },
    [logIn.fulfilled](state, action) {
      //   (state.email = "dlaxodud1217@naver.com"),
      //     (state.password = "password1234"),
      //     (state.isLoggingIn = false);
      state.email = "asdf";
    },
    [logIn.rejected](state, action) {
      state.logInRejectedReason = "asdf";
    },
  },
});

export default logInSlice;
// export const { logIn } = logInSlice.actions;
