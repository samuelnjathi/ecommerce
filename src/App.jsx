import React from 'react';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProductDetails from './pages/ProductDetails';

import { ProductProvider } from './context/ProductContext';
import { CartProvider } from './context/CartContext';

import Auth from './pages/Admin/Auth';
import AdminDashboard from './pages/Admin/AdminDashboard';
import Products from './pages/Admin/Products';
import Orders from './pages/Admin/Orders';

import PublicLayout from './Layouts/PublicLayout';
import AdminLayout from './Layouts/AdminLayout';


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from './components/Auth/PrivateRoute';

function App() {

  return (
    <>
      <ProductProvider>
        <CartProvider>
          
            
            <ToastContainer position="top-right" autoClose={2000}/>
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<PublicLayout><Home /></PublicLayout>} />
                <Route path='/product/:id' element={<PublicLayout><ProductDetails /></PublicLayout> } />
                <Route path='/cart' element={<PublicLayout><Cart /></PublicLayout>} />
                <Route path='/checkout' element={<PublicLayout><Checkout /></PublicLayout>} />
                
                <Route path='/admin/auth' element={<Auth />} />

                <Route path='/admin/dashboard' element={<PrivateRoute><AdminLayout><AdminDashboard /></AdminLayout></PrivateRoute>} />
                <Route path='/admin/products' element={<PrivateRoute><AdminLayout><Products /></AdminLayout></PrivateRoute>} />
                <Route path='/admin/orders' element={<PrivateRoute><AdminLayout><Orders /></AdminLayout></PrivateRoute>} />
              </Routes>
            </BrowserRouter>
            
       
        </CartProvider>
      </ProductProvider>
    </>
  )
}

export default App
