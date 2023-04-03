import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import css
import './index.css';
// import AppContext
import {AppProvider} from './context/context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
);

