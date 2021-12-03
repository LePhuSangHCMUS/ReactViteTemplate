import { IAction } from "@Interfaces/common";
import _ from "lodash";
import {
  createActionTypeOnFailure, createActionTypeOnStart,
  createActionTypeOnSuccess
} from "../unfoldSaga";
import ActionType from "./action-type";
const initialState = {
  type: null,
  loading: false,
  payload: null,
  error: null,
};
export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case createActionTypeOnStart(ActionType.LOAD_SETTING):
        return _.merge(initialState,{
          type:action.type,
          loading:true,
          payload:null,
          error:null
        })
    case createActionTypeOnSuccess(ActionType.LOAD_SETTING):
        return _.merge(initialState,{
          type:action.type,
          loading:false,
          payload:action.payload,
          error:null
        })
    case createActionTypeOnFailure(ActionType.LOAD_SETTING):
        return _.merge(initialState,{
          type:action.type,
          loading:false,
          error:action.error
        })
    default:
      return state;
  }
};
