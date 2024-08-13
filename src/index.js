import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.js';
import reportWebVitals from './reportWebVitals.js';
import Message from './components/message.js';
import Assign from './Assign.js';
import Name from './Naming.js';

const root = ReactDOM.createRoot(document.getElementById('ajuna'));
root.render(
  <React.StrictMode>
    <App/>
    {/* <Name names={"Ajuna Rai"}/>
    <Name names={"Akriti Khanal"}/>
    <App />
    {/* <Assign/>
    <Message message={"Hello"}/>
    <Message message={"Hello again."}/> */} 
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
