import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../actions/getPostData";

const initialState = {
  data: [],
  count: 1,
  isLoading: false,
  finished: false,
};

export const postSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.pending](state, action) {
      state.isLoading = true;
    },
    [getPosts.fulfilled](state, action) {
      if (action.payload.data.length) {
        state.data = [...state.data].concat(action.payload.data);
        state.isLoading = false;
        state.count += 10;
      } else {
        state.finished = true;
      }
    },
    [getPosts.rejected](state, action) {
      state.isLoading = false;
      state.authErrorReason = action.error;
    },
  },
});

export default postSlice;
