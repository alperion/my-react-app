// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';

import Footer from './components/Footer';
import Home from './pages/Home';
import Account from './pages/Account';
import Orders from './pages/Orders';
import OrderDetail from './pages/OrderDetail';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hesabim" element={<Account />} />
          <Route path="/siparislerim" element={<Orders />} />
          <Route path="/siparis-detay/:orderId" element={<OrderDetail />} />
          <Route path="/giris" element={<Login />} />
          <Route path="/kayit-ol" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;