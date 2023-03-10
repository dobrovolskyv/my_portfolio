import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.scss'
import App from './App';
import { ThemeProvider } from './provider/ThemeProvider';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <BrowserRouter>
    <ThemeProvider>
     <App/>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


