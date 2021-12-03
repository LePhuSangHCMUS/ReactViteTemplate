// import { ILoginCredentials } from "@Interfaces/credentials";
// import { IUserProfile } from "@Interfaces/user";
// import ActionType from './action-type';
// //Special :
// export const loginAction={
//   start :(credentials:ILoginCredentials) => ({
//     type: ActionType.LOGIN_START,
//     credentials,
//     payload:null,
//     error:null
//   }),
//   success :(result:IUserProfile) => ({
//     type: ActionType.LOGIN_START,
//     payload:result,
//     error:null
//   }),
//   fail : (error:Error) => ({
//     type: ActionType.LOGIN_FAIL,
//     payload:null,
//     error:error
//   })
// }

//NEW VERSION
import { ICallbacksSaga } from "@Interfaces/saga";
import ActionType from "./action-type";

export function loadSetting( callbacks?: ICallbacksSaga) {
  return {
    type: ActionType.LOAD_SETTING,
    callbacks,
    // any other things
  };
}
