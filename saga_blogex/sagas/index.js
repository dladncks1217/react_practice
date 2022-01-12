import { all, call } from "redux-saga/effects";
import button from "./button";
import login from "./login";

export default function* rootSaga() {
  yield all([call(button), call(login)]);
}
