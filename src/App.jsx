import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';

import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';

import Login from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/AdminDashboard';

import PublicLayout from './Layouts/PublicLayout';
import AdminLayout from './Layouts/AdminLayout';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          <AuthProvider>
            <ToastContainer position="top-right" autoClose={2000}/>
            <Router>
              <Routes>
                <Route path='/' element={<PublicLayout><Home /></PublicLayout>} />
                <Route path='/product/:id' element={<PublicLayout><ProductDetails /></PublicLayout> } />
                <Route path='/cart' element={<PublicLayout><Cart /></PublicLayout>} />
                <Route path='/checkout' element={<PublicLayout><Checkout /></PublicLayout>} />
                
                <Route path='/login' element={<Login />} />

                <Route path='/admin/dashboard' element={<AdminLayout><AdminDashboard /></AdminLayout>} />
              </Routes>
            </Router>
          </AuthProvider>
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
