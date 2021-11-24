import { BUTTON_FAILURE, CLICK_BUTTON, CLICK_BUTTON_SAGAS } from "../reducers";
import { put, call, all, takeLatest } from "redux-saga/effects";

function* buttonClick() {
  try {
    yield put({
      type: CLICK_BUTTON_SAGAS,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: BUTTON_FAILURE,
    });
  }
}

function* watchButton() {
  yield takeLatest(CLICK_BUTTON, buttonClick);
}

export default function* rootSaga() {
  yield watchButton();
}
