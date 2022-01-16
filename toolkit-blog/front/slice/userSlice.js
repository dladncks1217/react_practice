import { createSlice } from "@reduxjs/toolkit";
import { join } from "../actions";

const initialState = {
  isJoined: false,
  isJoining: false,
  joinUser: null,
  joinRejectReason: "",
};

export const joinSlice = createSlice({
  name: join,
  initialState,
  reducers: {},
  extraReducers: {
    [join.pending](state, action) {
      state.isJoining = true;
    },
    [join.fulfilled](state, action) {
      state.isJoined = true;
      state.isJoining = false;
      state.joinUser = action.payload.config.data;
      state.joinRejectReason = "";
    },
    [join.rejected](state, action) {
      state.isJoining = false;
      state.joinErrorReasion = action.error;
    },
  },
});
