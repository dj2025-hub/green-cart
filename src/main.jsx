import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/geist-sans';
import App from './App.jsx'
import {BrowserRouter as Router} from 'react-router-dom'
import {CartProvider} from './context/cart.jsx';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <CartProvider>
          <Router>
              <App />
          </Router>
      </CartProvider>
  </React.StrictMode>,
)
