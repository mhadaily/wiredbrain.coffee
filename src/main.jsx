import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { ProductsProvider } from './logic/ProductsContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <App />
      </ProductsProvider>
    </Router>
  </React.StrictMode>
);
