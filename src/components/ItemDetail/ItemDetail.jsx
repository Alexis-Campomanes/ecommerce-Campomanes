import React from 'react'
import Counter from '../Counter/Counter';
import './ItemDetail.scss';
import { useState } from 'react';

const ItemDetail = ({item}) => {

  const [cantidad, setCantidad] = useState(1);

  const handleAdd = () => {
    console.log({
      ...item,
      cantidad
    })
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
              <Counter 
              stock={item.stock} 
              contador = {cantidad}
              setContador = {setCantidad}
              handleAdd = {handleAdd}
              />
          </div>
    </div>
  )
}

export default ItemDetail
