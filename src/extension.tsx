import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './components/Extension/Main';
import './global.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('extension') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Main />
    </Provider>
  </React.StrictMode>,
);
