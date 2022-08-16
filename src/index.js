import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import Scrimba from './Scrimba'
//import './Scrimba.css'
//import './project1/project1.css'
//import './airbnb/airbnb.css'
//import './travel/style.css'
import './meme/style.css'
import Appp from './Appp';
import Aapp from './Aapp';
import 'tachyons';
import reportWebVitals from './reportWebVitals';
//import App from './project1/App';
//import App from './airbnb/App';
//import Aap from './travel/Aap'
import App from './meme/App'

ReactDOM.render(
  <React.StrictMode>
    < App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
