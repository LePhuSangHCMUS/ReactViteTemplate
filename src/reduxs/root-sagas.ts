
import loginSaga from "@Reduxs/Authentication/saga"
import { all } from "redux-saga/effects"





export default function* rootSaga() {
  yield all([
    loginSaga(),
  ])
  // code after all-effect
}