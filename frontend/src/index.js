import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Connect to WebSocket server
const websocket = new WebSocket("ws://localhost:5000");

// Asignación de callbacks
websocket.onopen = function (evt) {
  localStorage.setItem('ws', websocket);
};

websocket.onclose = function (evt) {
  console.log(evt);
};

websocket.onerror = function (evt) {
  console.log("Error:");
  console.log(evt);
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App websocket={websocket} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
