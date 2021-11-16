// import { IUserProfile } from "@Interfaces/user";
// import { all, call, put, takeEvery } from 'redux-saga/effects';
// import {loginAction} from './action';
// import ActionType from './action-type';
// import baseApi from "./api";

// function* login({credentials}:ReturnType<typeof loginAction.start>):any{
//     try {
//         const resp:IUserProfile = yield call(baseApi.loginUser,credentials);
//         yield put(loginAction.success(resp));
//         return Promise.resolve (resp);

//       } catch (err) {
//         console.log(err);
//         yield put(loginAction.fail(err as Error));

//       }

// }

// export default function* () {
//   yield all([takeEvery(ActionType.LOGIN_START, login)]);
// }

//NEW VERSION
import { all, takeEvery } from "redux-saga/effects";
import { unfoldSaga } from "../unfoldSaga";
import ActionType from "./action-type";
import baseApi from "./api";
import { ILoginCredentials } from "@Interfaces/credentials";
import {loginAPI} from "../../mock-api/api"
interface ITakeAction {
  callbacks?: any;
  payload: ILoginCredentials;
  type: string;
}

function* takeLogin({ callbacks, payload, type }: ITakeAction) {
  yield unfoldSaga({
    handler: async () => {
      const response = await loginAPI(payload);
      return response; // Or response.json();
    },
    key: type, // Once and for all.
    callbacks: callbacks,
  });
}

export default function* () {
  yield all([takeEvery(ActionType.LOGIN, takeLogin)]);
}
