import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import GoogleLogin from '@/components/Extension/GoogleLogin';
import Save from './components/Extension/Save';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { fetcher } from './api';

ReactDOM.createRoot(document.getElementById('extension') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Provider store={store}>
        <Save />
        {/* <GoogleLogin /> */}
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
);
