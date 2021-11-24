import { BUTTON_FAILURE, CLICK_BUTTON } from "../reducers";
import { put, call } from "redux-saga/effects";

function* button() {
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
  yield takeLatest(CLICK_BUTTON, button);
}

export default function* RootSaga() {
  yield call(watchButton());
}
