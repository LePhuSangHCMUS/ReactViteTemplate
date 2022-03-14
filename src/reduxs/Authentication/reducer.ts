import { IAction } from "@Interfaces/common";
import ActionType from "./action-type";
import {merge} from "lodash";
import {
  createActionTypeOnStart,
  createActionTypeOnSuccess,
  createActionTypeOnFailure,
  createActionTypeOnFinish,
} from "../unfoldSaga";
const initialState = {
  type: null,
  loading: false,
  payload: null,
  error: null,
};
export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case createActionTypeOnStart(ActionType.LOGIN):
        return merge(initialState,{
          type:action.type,
          loading:true,
          payload:null,
          error:null
        })
    case createActionTypeOnSuccess(ActionType.LOGIN):
        return merge(initialState,{
          type:action.type,
          loading:false,
          payload:action.payload,
          error:null
        })
    case createActionTypeOnFailure(ActionType.LOGIN):
        return merge(initialState,{
          type:action.type,
          loading:false,
          error:action.error
        })
    default:
      return state;
  }
};
