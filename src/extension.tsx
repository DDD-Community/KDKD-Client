import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import GoogleLogin from '@/components/Extension/GoogleLogin';
import Save from './components/Extension/Save';
import { store } from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('extension') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Save />
      {/* <div><GoogleLogin /></div> */}
    </Provider>
  </React.StrictMode>,
);
