

export interface ICallbacksSaga {
    readonly callbackOnBegin?:any,
    readonly callbackOnFailure?:any,
    readonly callbackOnFinish?:any,
    readonly callbackOnSuccess?:any,
}

export interface IUnfoldSaga {
    readonly handler:any,
    readonly  key:string//"CANCER_ORDER"
    readonly callbacks?:ICallbacksSaga
  }
