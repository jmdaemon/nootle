import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Menu from './Menu';
import reportWebVitals from './reportWebVitals';
import pino from 'pino';

// Create our application's logger
const logger = pino();

const root = ReactDOM.createRoot(document.getElementById('root'));
// Stub the implementation for notes
root.render(
  <React.StrictMode>
    <meta name="viewport" content="initial-scale=1, width=device-width" />
    <Menu notes={['Notes', 'Prototypes.md']} logger={logger}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
