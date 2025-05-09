import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import RestaurantList from './pages/RestaurantList';
import RestaurantDetail from './pages/RestaurantDetail';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider> {/* ✅ Wrap everything with CartProvider */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurants" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
