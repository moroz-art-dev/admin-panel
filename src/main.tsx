import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AppProvider from '@app/AppProvider';
import Routes from '@app/Routes';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AppProvider>
      <Routes />
      <App />
    </AppProvider>
  </React.StrictMode>
);
