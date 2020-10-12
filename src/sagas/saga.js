import { delay, put, takeEvery } from "redux-saga/effects";

function handleUserEmailChange() {
  put({ type: "USER_EMAIL_UPDATE", paypload: email });
}
function* userEmailChange() {
  yield delay(500);
  yield handleUserEmailChange();
}

export function* watchEmailChange() {
  yield takeEvery("USER_EMAIL_UPDATE", userEmailChange);
}
