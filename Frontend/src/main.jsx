import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { CompareProvider } from './context/CompareContext';

ReactDOM.render(
  <React.StrictMode>
    <CompareProvider>
      <App />
    </CompareProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
