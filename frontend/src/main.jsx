import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import HomeScreen from './screens/HomeScreen.jsx';
import ProductsScreen from './screens/ProductsScreen.jsx';
import { Provider } from 'react-redux';
import store from './store.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SingleProduct from './screens/SingleProduct.jsx';
import CartScreen from './screens/CartScreen.jsx';
import LoginScreen from './screens/LoginScreen.jsx';
import RegisterScreen from './screens/RegisterScreen.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index={true} path='/' element={<HomeScreen />} />
          <Route path="products" element={<ProductsScreen />} />
          <Route path="products/:id" element={<SingleProduct />} />
          <Route path="cart" element={<CartScreen />} />
          <Route path="login" element={<LoginScreen />} />
          <Route path="register" element={<RegisterScreen />} />

        </Route>
      </Routes>
    </BrowserRouter>
    </Provider>

  </React.StrictMode>
);
