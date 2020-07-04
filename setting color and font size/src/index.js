import React from 'react';
import ReactDOM from 'react-dom';
import './css/grid.css';
import './css/main.css';
import HomePage from './component/home-page.js';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <React.StrictMode>
     <HomePage />
  </React.StrictMode>,
  document.getElementById('page')
);

