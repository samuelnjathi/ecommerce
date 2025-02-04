import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
// import Checkout from './pages/Checkout';
// import OrderConfirmation from './pages/OrderConfirmation';
import ProductDetails from './pages/ProductDetails';
import Header from "./components/Header";
import Footer from './components/Footer'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <ToastContainer position="top-right" autoClose={2000}/>
          <Router>
            <Header />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/product/:id' element={<ProductDetails />} />
              <Route path='/cart' element={<Cart />} />
            </Routes>
            <Footer />
          </Router>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
