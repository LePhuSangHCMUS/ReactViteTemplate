import { IAction } from "@Interfaces/common";
import ActionType from "./action-type";
import { fromJS } from "immutable";
import {
  createActionTypeOnStart,
  createActionTypeOnSuccess,
  createActionTypeOnFailure,
  createActionTypeOnFinish,
} from "../unfoldSaga";
const initialState = fromJS({
  type: null,
  loading: false,
  payload: null,
  error: null,
});
export default (state = initialState, action: IAction) => {
  switch (action.type) {
    case createActionTypeOnStart(ActionType.LOGIN):
      return state
        .set("type", fromJS(action.type))
        .set("loading", true)
        .set("payload", null)
        .set("error", null);
    case createActionTypeOnSuccess(ActionType.LOGIN):
      return state
        .set("type", fromJS(action.type))
        .set("loading", false)
        .set("payload", fromJS(action.payload))
        .set("error", null);
    case createActionTypeOnFailure(ActionType.LOGIN):
      return state
        .set("type", fromJS(action.type))
        .set("loading", false)
        .set("payload", null)
        .set("error", fromJS(action.error));
    default:
      return state;
  }
};
