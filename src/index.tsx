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

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
