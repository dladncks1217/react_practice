import { combineReducers } from "@reduxjs/toolkit";
import postSlice from "./postSlice";

export default combineReducers({
  post: postSlice.reducer,
});
