import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import { SWRConfig } from 'swr';
import { fetcher } from './api';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ fetcher }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </SWRConfig>
  </React.StrictMode>,
);
