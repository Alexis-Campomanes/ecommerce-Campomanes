import Home from './complements/Home'
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Layout from './complements/Layout';
import Products from './components/Products/Products';
import ProductsCart from './components/ProductsCart/ProductsCart';


function App() {
  return (
    <BrowserRouter>
  <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element={<Home />} />
        <Route path='/product/:categoryId' element = {<Products/>} />
        <Route path='/item/:itemId' element = {<ProductsCart />} />
        <Route path='*' element ={<Navigate to = '/' />} />
    </Route>
  </Routes>
</BrowserRouter>
  );     
}

export default App;
