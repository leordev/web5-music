import React from 'react';
import ReactDOM from 'react-dom/client';
// import {
//   BrowserRouter,
//   // createBrowserRouter, RouterProvider
// } from 'react-router-dom';

import './index.css';

import { App } from './App';

const rootDiv = document.getElementById('root');

if (!rootDiv) {
  throw new Error('Root not present in html');
}

ReactDOM.createRoot(rootDiv).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
