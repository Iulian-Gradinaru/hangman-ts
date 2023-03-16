import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Imports styles
 */
import './index.css';

/**
 * Imports the app
 */
import { App } from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
