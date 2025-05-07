import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './learn_props/style.css'
import reportWebVitals from './reportWebVitals';


import List from "./learn_list/learn_list";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <List />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
