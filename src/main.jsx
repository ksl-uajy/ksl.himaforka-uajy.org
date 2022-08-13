import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

// pp
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./authConfig";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <MsalProvider instance={msalInstance}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </MsalProvider>
);
