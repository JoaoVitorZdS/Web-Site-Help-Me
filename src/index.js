import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { AccessTokenProvider } from './components/StyledButtons/ButtonLogInGoogle.js';

document.body.style.margin = 0;
document.body.style.overflowX = 'hidden';
document.body.style.fontFamily = 'Roboto,sans-serif';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessTokenProvider>
        <App />
      </AccessTokenProvider>
    </BrowserRouter>
  </React.StrictMode>
)
