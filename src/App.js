import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import CartList from './pages/CartList';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart-list' element={<CartList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
