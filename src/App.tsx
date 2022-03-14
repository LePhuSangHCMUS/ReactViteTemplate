// //lib
import ButtonDarkMode from "@Components/common/ButtonDarkMode/ButtonDarkMode";
import ConnectionDetect from "@Components/common/ConnectionDetect/ConnectionDetect";
// //components
// //config
import i18next from "@Configs/i18n/i18n";
import initEmitter from "./emitter";
import initSocket from "./socket";
import useDarkMode from "@Hooks/useDarkMode";
//store
import rootSagas from '@Reduxs/root-sagas';
import React, { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import {
  RecoilRoot
} from 'recoil';
import { PersistGate } from "redux-persist/integration/react";
//const
//Styled Component Config
//style
import "./app.less";
import AppRouter from "./appRoute/AppRoute";
import storeConfig from "./reduxs/store";
import { Inspector, InspectParams } from 'react-dev-inspector'

const InspectorWrapper = import.meta.env.MODE === 'development'
  ? Inspector
  : React.Fragment



const { store, persistor, sagaMiddleware } = storeConfig();
sagaMiddleware.run(rootSagas);
const mode = import.meta.env.MODE;
console.log(`%c${mode}`, "color: white; font-size: 40px ;background:green");

//You can import / export this, but that sounds like a pain. Seems like a good thing to add to global
export default function App() {

  useEffect(() => {
    //Init socketIO,Emitter........
    initEmitter();
    initSocket();
    // const myEmitter=globalAny.myEmitter.addListener('event', (a:any) => {
    //   console.log("Emitted" ,a);
    // });
    // return ()=>{
    //   myEmitter.remove()
    // }
  }, [])


  const [theme, themeToggler, mountedComponent] = useDarkMode();
  // if (!mountedComponent) return<div> loading...</div>;
  return (
    <div className={`app ${theme === "light" ? "light" : "dark"}`}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          {/* <InspectorWrapper
            // props docs see:
            // https://github.com/zthxxx/react-dev-inspector#inspector-component-props
            keys={['control', 'shift', 'command', 'c']}
            disableLaunchEditor={false}
            onHoverElement={(params: InspectParams) => {
              
             }}
            onClickElement={(params: InspectParams) => {

              console.log(params);

             }}
          > */}
            <React.Suspense fallback={<div className="fallback" />}>
              <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                  <RecoilRoot>

                    <AppRouter />
                  </RecoilRoot>
                </PersistGate>
              </Provider>
            </React.Suspense>
          {/* </InspectorWrapper> */}

        </BrowserRouter>
      </I18nextProvider>
      <ButtonDarkMode theme={theme} toggleTheme={themeToggler} />
      <ConnectionDetect />
    </div>
  );
}
