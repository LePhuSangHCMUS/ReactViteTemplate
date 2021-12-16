//SOCKET
// import SocketClient from "@Configs/socket/socket-client";
// import socketMiddleware from "@Configs/socket/socket-middleware";
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
// import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { applyMiddleware, compose, createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
const sagaMiddleware = createSagaMiddleware()
// const socketClient = new SocketClient();
// socketClient.connect()
// console.log(process.env)
export const history = createBrowserHistory();
const enhancers = []
const middleware = [
    // socketMiddleware(socketClient),
    sagaMiddleware,
    routerMiddleware(history)
]
//Config Persistent redux


export const persistConfig  = {
    key: 'root',
    storage: storage,
    whitelist: ['loginReducer'],
    // stateReconciler: autoMergeLevel2
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
///Config Redux Dev Tool
console.log("[Store.ts- 43]",import.meta.env);
if (import.meta.env.MODE=== 'development') {
    const devToolsExtension =(window as any).devToolsExtension ? (window as any).devToolsExtension() : (f:any) => f

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension)
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

const store = createStore<any, any, any, any>( persistedReducer,composedEnhancers);
const persistor = persistStore(store)


export default ()=>{
   return { store, persistor,sagaMiddleware }
} 