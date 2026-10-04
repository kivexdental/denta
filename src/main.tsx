import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { PreviewApp } from './preview/PreviewApp';
import './index.css';

// Check if running as standalone website or inside preview iframe
const isStandalone = 
  window.location.search.includes('standalone=true') || 
  window.self !== window.top;

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {isStandalone ? <App /> : <PreviewApp />}
  </React.StrictMode>
);
