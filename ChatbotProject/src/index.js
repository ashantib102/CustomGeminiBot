import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // This is optional; create an index.css file if you have custom styles
import App from './App'; // Create App.js in src if it doesn’t already exist

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
