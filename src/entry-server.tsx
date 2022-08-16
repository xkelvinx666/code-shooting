import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './utils/store';
import App from './App';
import './index.css';

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  ),
);
