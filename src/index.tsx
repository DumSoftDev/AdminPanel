import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import { AdminPanel } from './AdminPanel';

import './index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element,
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AdminPanel />
    </Provider>
  </React.StrictMode>,
);
