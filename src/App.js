import Home from './complements/Home'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from './complements/Layout';
import Products from './components/Products/Products';
import ProductsCart from './components/ProductsCart/ProductsCart';
import { CartContext } from './components/CartContext/CartContext';
import { useState } from 'react';
import Cart from '../src/components/Cart/Cart'


function App() {

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.find(item => item.id === id)
  }


  return (
  <CartContext.Provider value={{
    cart,
    addToCart,
    isInCart
  }}>

    <BrowserRouter>

          <Routes>

              <Route path='/' element = {<Layout />}>
                <Route index element={<Home />} />
                <Route path='/product/:categoryId' element = {<Products/>} />
                <Route path='/item/:itemId' element = {<ProductsCart />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='*' element ={<Navigate to = '/' />} />

            </Route>

          </Routes>

    </BrowserRouter>

  </CartContext.Provider>
    
  );     
}

export default App;
