import React from 'react'
import './Cart.scss';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';



const Cart = () => {

  const { cart } = useContext(CartContext)

  return (
    <div>
        <div className="cart">
          <div style={{fontSize:'30pt'}}>Cart</div>
          <div className='cart-button'>
            <button>Continue Shopping</button>
            <div className='cart-shopping'>
              <span>Items in your cart : 3</span>
              <span>Whitlist Item: 0</span>
            </div>
            <button>Checkout</button>
          </div>
        </div>
        {/* central div */}
              <div className='c-central'>
                  { cart.map((item) => (
                      <div key={item.id} className='cart-conteiner' >
                        <div className='c-cards'>
                          <div>
                            <img src={item.image} alt="product-img" style={{width:'200px'}} />
                          </div>
                          <div className='cart-description'>
                            <p> 
                              <b>ID:</b>{item.id}
                            </p>
                            <p> 
                              <b>Category:</b> {item.category}
                            </p>
                            <p> 
                              <b>Brands:</b> {item.brands}
                            </p>
                          </div>
                        </div>
                        <div className='conter-m'>
                          <span>${item.price}</span>
                        </div>
                      </div>
                    ))}
                  
              </div>
              <hr></hr>
            </div>
  )
}

export default Cart
