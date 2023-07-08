import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.scss';

ReactDOM.createRoot(document.getElementById('extension') as HTMLElement).render(
  <React.StrictMode>
    <div>
      <h2>This is Extension!!!!</h2>
    </div>
  </React.StrictMode>,
);
