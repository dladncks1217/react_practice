import {
  BUTTON_CLICKED,
  BUTTON_SUCCESS,
  BUTTON_FAILURE,
} from "../reducers/button";
import { put, call, all, takeLatest } from "redux-saga/effects";

function* buttonClicked() {
  try {
    yield put({
      type: BUTTON_SUCCESS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: BUTTON_FAILURE,
    });
  }
}

function* watchButton() {
  yield takeLatest(BUTTON_CLICKED, buttonClicked);
}

export default function* buttonSaga() {
  yield watchButton();
}
