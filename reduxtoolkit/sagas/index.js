import {
  ADD_NUBER_FAILURE,
  ADD_NUBER_REQUEST,
  ADD_NUBER_SUCCESS,
} from "../reducer";
import { fork, takeEvery, put, delay } from "redux-saga/effects";

function* addNumber() {
  try {
    yield delay(2000);
    yield put({
      type: ADD_NUBER_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: ADD_NUBER_FAILURE,
    });
  }
}

function* watchAddNumber() {
  yield takeEvery(ADD_NUBER_REQUEST, addNumber);
}

export default function* rootSaga() {
  yield fork(watchAddNumber);
}
