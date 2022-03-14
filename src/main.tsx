import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'antd/dist/antd.css'

//Disable Console.log Production Mode
if (import.meta.env.MODE === 'production') {
  console.log = function () {};
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
