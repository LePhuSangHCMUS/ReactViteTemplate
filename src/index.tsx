//lib
import * as React from "react";
import * as ReactDOM from "react-dom";

//components
import App from "./App";
//style
import "./index.scss";
import "antd/dist/antd.css"; 
// or 'antd/dist/antd.less'

//const
//
ReactDOM.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  ,
  document.querySelector("#root")
);
