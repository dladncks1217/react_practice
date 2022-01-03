import { combineReducers } from "redux";
import counterSlice from "./counterSlice";
import logInSlice from "./logInSlice";
import textSlice from "./textSlice";

export default combineReducers({
  counter: counterSlice.reducer,
  login: logInSlice.reducer,
  text: textSlice.reducer,
});
