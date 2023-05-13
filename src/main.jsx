import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.jsx';
import { ProductsProvider } from './logic/ProductsContext';
import { AuthProvider } from './logic/AuthContext';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
