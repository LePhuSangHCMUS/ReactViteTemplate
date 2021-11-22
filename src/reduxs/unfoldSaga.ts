import {call,put} from"redux-saga/effects"
import {IUnfoldSaga,ICallbacksSaga} from "@Interfaces/saga"

 /**
   * Action type generators
   */
  export function createActionTypeOnStart(key:string) {
    return `${key}_BEGAN`;
  }
   
  export function createActionTypeOnFailure(key:string) {
    return `${key}_FAILED`;
  }
   
  export function createActionTypeOnFinish(key:string) {
    return `${key}_FINISHED`;
  }
   
  export function createActionTypeOnSuccess(key:string) {
    return `${key}_SUCCEEDED`;
  }
export function* unfoldSaga(
    { handler,key,callbacks={}}:IUnfoldSaga,
  ) {

    const {
        callbackOnBegin = ()=>{},
        callbackOnFailure = (err:any)=>{},
        callbackOnFinish =()=>{},
        callbackOnSuccess =(data:any)=>{},
      }=callbacks as ICallbacksSaga
    try {
      yield put({ type: createActionTypeOnStart(key) });
      yield call(callbackOnBegin);
      const data:object= yield call(handler);
      yield put({ type: createActionTypeOnSuccess(key), payload: data });
      yield call(callbackOnSuccess, data);
    } catch (error) {
      yield put({ type: createActionTypeOnFailure(key), payload: error });
      if (process.env.NODE_ENV !== 'production') {
        /* eslint-disable no-console */
        yield call(console.log, `Error at ${key} action`);
        yield call(console.log, error);
        /* eslint-enable */
      }
      yield call(callbackOnFailure, error);
    } finally {
      yield put({ type: createActionTypeOnFinish(key) });
      yield call(callbackOnFinish);
    }
  }
   
 