import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
if (process.env.NODE_ENV === 'production') {
  console.log = function () {};
}
console.log = function () {};


console.log("HIIII")
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
