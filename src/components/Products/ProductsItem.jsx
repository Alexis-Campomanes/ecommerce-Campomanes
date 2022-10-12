import React from 'react'
import { ShoppingCartOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom';
import './ProductsItem.scss';
import NotLike from '../../Assets/notlike.png';
import  Like from '../../Assets/like.png'
import { useState } from 'react';




const ProductsItem = ({product}) => {

  const [favorite, setFavorite] = useState(true);

  const handleFavorite = () => {
    setFavorite(!favorite)
  }


  return (
  
    <div className='products-card'>
      <div className='p-top'>
        <img src={product.image} alt="imagen"/>
            <div className='i-favorite' onClick={handleFavorite}>
              {
              <img src={favorite
                        ?NotLike
                        :Like
                        } alt="favorite" />
              }
            </div>
      </div>
            {/* icons */}  
      <div className='i-shopping'>
              <Link to={`/item/${product.id}`}>
                <IconButton>
                  <ShoppingCartOutlined style={{
                    fill:'#ffffff',
                    cursor:'pointer'
                  }}/>
                </IconButton>
              </Link> 
        </div>     
    </div>
    
  )
}

export default ProductsItem
