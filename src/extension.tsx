import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';
import GoogleLogin from '@/components/Extension/GoogleLogin';

ReactDOM.createRoot(document.getElementById('extension') as HTMLElement).render(
  <React.StrictMode>
    <div style={{ width: 500 }}>
      <GoogleLogin />
    </div>
  </React.StrictMode>,
);
