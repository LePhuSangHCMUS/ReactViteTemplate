// //lib
import ButtonDarkMode from "@Components/common/ButtonDarkMode/ButtonDarkMode";
// //components
// //config
import i18next from "@Configs/i18n/i18n";
import useDarkMode from "@Hooks/useDarkMode";
import React,{useEffect} from "react";
import { I18nextProvider } from "react-i18next";
//const
import io from 'socket.io-client';

//store
import rootSagas from '@Reduxs/root-sagas';
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
//Styled Component Config
//style
import "./app.scss";
import AppRouter from "./appRoute/AppRoute";
import storeConfig from "./reduxs/store";
import ConnectionDetect from "@Components/common/ConnectionDetect/ConnectionDetect";
const { store, persistor ,sagaMiddleware} = storeConfig();
sagaMiddleware.run(rootSagas)
function initSocket() {
  const socket = io('', {path: '/ws'});
  socket.on('news', (data) => {
    console.log(data);
    socket.emit('my other event', { my: 'data from client' });
  });
  socket.on('msg', (data) => {
    console.log(data);
  });

  return socket;
}

(global as any).socket = initSocket();




export default function App() {
  // window.addEventListener('offline', function(e) {
  //   console.log('offline'); });
    
  //   window.addEventListener('online', function(e) { console.log('online');
  //   }); 
  // useEffect(() => {
  //   return () => {
  //   }
  // }, [])
  const [theme, themeToggler, mountedComponent] = useDarkMode();
  // if (!mountedComponent) return<div> loading...</div>;
  return (
    <div className={`app ${theme==="light"?"light":"dark"}`}>
      <I18nextProvider i18n={i18next}>
        <BrowserRouter>
          <React.Suspense fallback={<div className="fallback" />}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <AppRouter />
              </PersistGate>
            </Provider>
          </React.Suspense>
        </BrowserRouter>
      </I18nextProvider>

      <ButtonDarkMode theme={theme} toggleTheme={themeToggler} />
      <ConnectionDetect/>
    </div>
  );
}
