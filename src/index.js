import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App";
import "./index.css";
const API = process.env.REACT_APP_APPIKEY;

ReactDOM.render(<App apiKey={API}/>, document.getElementById('root'));
