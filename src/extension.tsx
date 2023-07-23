import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import GoogleLogin from '@/components/Extension/GoogleLogin';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('extension') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={{ width: 500 }}>
        <span id="dom-control-span">
          Lorem ipsum dolor sit amet consectetur.
        </span>
        <GoogleLogin />
      </div>
    </Provider>
  </React.StrictMode>,
);
