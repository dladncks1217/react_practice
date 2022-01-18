import { combineReducers } from "redux";
import { joinSlice } from "./userSlice";
export default combineReducers({
  user: joinSlice.reducer,
});
