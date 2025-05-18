import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './learn_props/style.css'
import reportWebVitals from './reportWebVitals';


import BucketList from "./adding_interactivity/BucketList";
import CityTestForm from "./managing_state/CityTestForm";
import NameForm from "./managing_state/NameForm";
import Accordion from "./managing_state/Accordion";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Accordion />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
