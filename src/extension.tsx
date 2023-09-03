import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { SWRConfig } from 'swr';
import { fetcher } from './api';
import Save from '@/components/Extension/Save';

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
