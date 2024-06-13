import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import AppProvider from '@app/AppProvider';
import ErrorBoundary from '@components/ErrorBoundary.tsx';
import '@styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <AppProvider>
        <App />
      </AppProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
