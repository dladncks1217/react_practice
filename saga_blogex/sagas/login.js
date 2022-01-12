import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../reducers/login";
import { put, all, delay, takeLatest, call } from "redux-saga/effects";

function* loginAxios(data) {
  // axios.post('주소',data);와 같은 동작
  return data;
}

function* login(action) {
  try {
    console.log(action.type);
    delay(2000);
    const result = yield call(loginAxios, action.user);
    console.log(action.user);
    yield put({
      type: LOGIN_SUCCESS,
      user: result,
    });
  } catch (e) {
    console.error(e);
    yield put({
      type: LOGIN_FAILURE,
    });
  }
}

function* watchLogin() {
  yield takeLatest(LOGIN_REQUEST, login);
}

export default function* loginSaga() {
  yield all([watchLogin()]);
}
