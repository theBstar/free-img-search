import React from 'react';
import ReactDOM from 'react-dom';
import App from "./Components/app";
import "./index.css";
import registerServiceWorker from './registerServiceWorker';
const API = process.env.REACT_APP_APPIKEY;

ReactDOM.render(<App apiKey={API}/>, document.getElementById('root'));
registerServiceWorker();
