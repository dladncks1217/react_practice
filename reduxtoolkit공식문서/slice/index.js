import { combineReducers } from "redux";
import counterSlice from "./counterSlice";
// import logInSlice from "./logInSlice";

export default combineReducers({
  counter: counterSlice.reducer,
  //   login: logInSlice.reducer,
});
