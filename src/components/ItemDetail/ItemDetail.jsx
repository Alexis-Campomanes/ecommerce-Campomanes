import React from 'react'
import Counter from '../Counter/Counter';
import './ItemDetail.scss';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Link } from 'react-router-dom';

const ItemDetail = ({item}) => {

  const { cart, addToCart, isInCart } = useContext(CartContext)
  console.log(cart)

  const [cantidad, setCantidad] = useState(1);


  const handleAdd = () => {
    const itemToCart = {
      id: item.id,
      price: item.price,
      name: item.name,
      brands: item.brands,
      category: item.category,
      image: item.image,
      stock: item.stock,
      cantidad: cantidad
    }
    isInCart(item.id)
    addToCart(itemToCart)
  }

  return (
    <div className='products-conteiner'>
      <div className='products-left'>
        <img src={item.image} alt="products_image" />
      </div>
        {/* imagen del producto*/}
      <div className='products-right'>
          <h1>{item.name}</h1>
          <span className= 'description'>{item.description}</span>
            <div style={{
              display:'flex',
              gap:'1rem',
              fontSize:'20pt',
              marginBottom:'2rem',
              marginTop:'1rem'}}>
              {/* marca del producto */}
                <span>Brands:</span>
                <span>{item.brands}</span>
            </div>
            {/* precio del producto */}
            <div style={{display:'flex', gap:'1rem',marginBottom:'2rem'}}>
              <span style={{fontSize:'20pt'}}>Price:</span>
              <span style={{fontSize:'20pt', fontWeight:'bold'}}> ${item.price}</span>
            </div>
            {/* stock del producto */}
            <div style={{display:'flex', gap:'1rem',marginBottom:'2rem'}}>
              <span style={{fontSize:'20pt'}}>Stock:</span>
              <span style={{fontSize:'20pt', fontWeight:'bold'}}>{item.stock}</span>
              {/* contador */}
            </div>
            {isInCart(item.id)  && <p>item was added to the cart</p>}
            
            {
                isInCart(item.id)
                ?<Link to='/cart'>
                  <button className='button'>Finish</button>
                </Link>
                :<Counter
                    stock={item.stock} 
                    contador = {cantidad}
                    setContador = {setCantidad}
                    handleAdd = {handleAdd}
                  
                />
            }
      </div>
    </div>
  )
}

export default ItemDetail
