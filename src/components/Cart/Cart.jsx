import React from 'react'
import './Cart.scss';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import { Close } from '@material-ui/icons';


const Cart = () => {

  const { cart, cartTotal, emptyCart, cartQuantity, itemIgv, subTotal } = useContext(CartContext)

  return (
    <div>
        <div className="cart">
          <div style={{fontSize:'30pt'}}>Cart</div>
          <div className='cart-button'>
            <button onClick={emptyCart}>Empty cart</button>
            <div className='cart-shopping'> 
              <span>Items in your cart : {cartQuantity()} </span>
            </div>
            <button>Checkout</button>
          </div>
        </div>
        {/* central div */}
          <div className='c-medium'>
            <div className='c-central'>
              { cart.map((item) => (
                <div key={item.id} className='cart-conteiner' >
                  <div className="image">
                    <img src={item.image} alt="" style={{width:'200px'}} />
                  </div>
                  <div className="description">
                    <p> 
                      <b>ID:</b>{item.id}
                    </p>
                    <p> 
                      <b>Category:</b> {item.category}
                    </p>
                    <p> 
                      <b>Brands:</b> {item.brands}
                    </p><p> 
                      <b>Amount:</b> {item.cantidad}
                    </p>
                  </div>
                  <div className='conter-m'>
                    <span>Price by unit</span>
                    <span>${item.price}</span>
                  </div>
                  <Close style={{
                    position: 'relative',
                    top:'-5.5rem'
                  }}/>
                </div>
              ))}
                </div>
                <div className='shopping'>
                  <span>Details</span>
                  <div className='s-details'>
                    {
                      cart.map((item)=>(
                          <div key={item.id} className='s-cards'>
                            <div className='s-conteiner'>
                              <img src={item.image} alt="" style={{width:'100px'}} />
                              <span>{item.brands}</span>
                            </div>
                            <div className='s-cantidad'>
                              <span>x{item.cantidad}</span>
                            </div>
                            <div>
                              $ 0.00
                            </div>
                          </div>
                      ))}
                  </div>
                  <div className='total'>
                      <div className='s-total'>
                        <span>Sub-Total</span>
                        <span>${subTotal()}</span>
                      </div>
                      <di className='s-total'>
                        <span>IGV</span>
                        <span>${itemIgv()}</span>
                      </di>
                      <div className='s-total'>
                        <span>total</span>
                        <span>${cartTotal()}</span>
                      </div>
                  </div>
                </div>
          </div>
    </div>
  )
}

export default Cart
