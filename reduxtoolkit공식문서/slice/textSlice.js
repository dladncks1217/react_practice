import { createSlice } from "@reduxjs/toolkit";
import { textToolkit } from "../actions";

const initialState = {
  text: null,
  hi: null,
  result: null,
  isPending: false,
  errorReason: "",
};

export const textSlice = createSlice({
  name: "texts",
  initialState,
  reducers: {},
  extraReducers: {
    [textToolkit.pending](state, action) {
      state.isPending = true;
    },
    [textToolkit.fulfilled](state, action) {
      state.data = action.payload;
    },
    [textToolkit.rejected](state, action) {
      state.errorReason = "가나다라마바사";
    },
  },
});
export default textSlice;
