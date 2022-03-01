import { combineReducers } from "redux";

import button from "./button";
import login from "./login";

const rootReducer = combineReducers({
  login,
  button,
});

export default rootReducer;
