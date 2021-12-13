import { takeEvery, delay, put, fork } from "redux-saga/effects";
import { LOG_IN_FAILURE, LOG_IN_REQUEST, LOG_IN_SUCCESS } from "../reducer";

function* loginAPI() {
  // axios.post('')
}

function* login() {
  try {
    console.log("asdf");
    yield delay(2000);
    yield put({
      type: LOG_IN_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOG_IN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, login);
}

export default function* LoginSaga() {
  yield fork(watchLogin);
}
