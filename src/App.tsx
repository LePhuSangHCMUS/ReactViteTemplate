// //lib
import ButtonDarkMode from "@Components/common/ButtonDarkMode/ButtonDarkMode";
import ConnectionDetect from "@Components/common/ConnectionDetect/ConnectionDetect";
// //components
// //config
import i18next from "@Configs/i18n/i18n";
import initGlobal, { globalAny } from "@Configs/initGlobal";
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
import "./app.scss";
import AppRouter from "./appRoute/AppRoute";
import storeConfig from "./reduxs/store";
const { store, persistor, sagaMiddleware } = storeConfig();
sagaMiddleware.run(rootSagas)

//You can import / export this, but that sounds like a pain. Seems like a good thing to add to global
export default function App() {

  useEffect(() => {
    //Init socketIO,Emitter........
    // initGlobal();
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
          <React.Suspense fallback={<div className="fallback" />}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <RecoilRoot>
                  <AppRouter />
                </RecoilRoot>
              </PersistGate>
            </Provider>
          </React.Suspense>
        </BrowserRouter>
      </I18nextProvider>

      <ButtonDarkMode theme={theme} toggleTheme={themeToggler} />
      <ConnectionDetect />
    </div>
  );
}
