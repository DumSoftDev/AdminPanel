import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';

import App from './App';

import './scss/components/index.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element,
);
root.render(
  <React.StrictMode>
    {/* <ThemeProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </ThemeProvider> */}
  </React.StrictMode>,
);
