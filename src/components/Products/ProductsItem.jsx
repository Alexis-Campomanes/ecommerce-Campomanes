import React from 'react'
import { FavoriteBorderOutlined, Search, ShoppingCartOutlined } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import {Link} from 'react-router-dom'




const ProductsItem = ({product}) => {

  return (
  
    <div className='products-card' style={{
      display:'flex',
      boxShadow:'5px 10px 18px #888888',
      borderRadius:'20px',
      overflow:'hidden',
      justifyContent:'center',
      padding:'1rem 0',
      marginBottom:'2rem',
      position:'relative'
    }}>
      <img src={product.image} alt="imagen" style={{
        width:'300px'
      }}/>
            {/* icons */}  
        <div className='icons' style={{
          position:'absolute',
          left: '8px',
          display:'flex',
          flexDirection: 'column',
          gap: '0.8rem'
        }}>
          <div>
            <Link to={`/item/${product.id}`}>
              <IconButton aria-label="add to shopping cart">
                <ShoppingCartOutlined style={{
                    fill:'#034ef7',
                    cursor:'pointer'
                  }}/>
              </IconButton>
            </Link> 
          </div>
          <div>
            <IconButton aria-label="I like it" >
              <FavoriteBorderOutlined style={{
                  fill:'#034ef7',
                  cursor:'pointer',
                }}/>
            </IconButton>
              
          </div>
          <div>
            <IconButton aria-label="Search">
              <Search style={{
                  fill:'#034ef7',
                  cursor:'pointer'
                }}/>
            </IconButton> 
          </div>
        </div>     
    </div>
  
  )
}

export default ProductsItem
