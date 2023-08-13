import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(
  document.getElementById('side-panel') as HTMLElement,
).render(
  <React.StrictMode>
    <Provider store={store}>
      <div>
        <h1>hello world</h1>
      </div>
    </Provider>
  </React.StrictMode>,
);
