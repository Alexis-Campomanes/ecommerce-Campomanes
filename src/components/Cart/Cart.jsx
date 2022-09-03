import React from 'react'
import './Cart.scss';
import Discound from '../Discound/Discound';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import invicta from '../../Assets/invicta.jpg';
import Counter from '../../components/Counter/Counter';
import rayband from '../../Assets/rayband.jpg'


const Cart = () => {
  return (
    <div>
      <Discound/>
      <Navbar/>
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
        <div style={{
          display:'flex'
        }}> 
          <div style={{flex:'70%'}}> 
            <div style={{
              display:'flex',
              justifyContent:'space-around',
              marginBottom:'2rem'
              }}>
              <div className='cart-conteiner'>
                <div>
                  <img src={invicta} alt="product-img" style={{width:'200px'}} />
                </div>
                <div className='cart-description'>
                  <p> 
                    <b>ID:</b> 12345678
                  </p>
                  <p> 
                    <b>Product:</b> Wacth
                  </p>
                    <div style={{display:'flex', alignItems:'center',
                    justifyContent:'center'}}>
                      <b style={{
                        paddingRight:'0.7rem'
                        }}>Color:</b>
                    <div style={{backgroundColor:'silver',
                    width:'30px',
                    height:'30px',
                    borderRadius:'50%'}}></div>
                  </div>
                  <p> 
                    <b>Brands:</b> Invicta
                  </p>
                </div>
                </div>
                  <div className='conter-m'>
                  <Counter/>
                  <span>70$</span>
                </div>
                </div>
                <hr></hr>
                <div style={{
                display:'flex',
                justifyContent:'space-around',
                marginTop:'2rem'
                }}>
                  <div className='cart-conteiner'>
                    <div>
                      <img src={rayband} alt="product-img" style={{width:'200px'}} />
                    </div>
                    <div className='cart-description'>
                      <p> 
                        <b>ID:</b> 87654321
                      </p>
                      <p> 
                        <b>Product:</b> Sunglases
                      </p>
                        <div style={{display:'flex', alignItems:'center',
                        justifyContent:'center'}}>
                          <b style={{
                          paddingRight:'0.7rem'
                          }}>Color:</b>
                        <div style={{backgroundColor:'black',
                        width:'30px',
                        height:'30px',
                        borderRadius:'50%'}}></div>
                        </div>
                        <p> 
                          <b>Brands:</b> RayBand
                        </p>
                    </div>
                  </div>
                  <div className='conter-m'>
                    <Counter/>
                    <span>70$</span>
                  </div>
                </div> 
          </div> 
          <div className='cart-box'>
            <h2>sumary</h2>
              <div className='cart-shipping'>
                <span>SubTotal</span>
                <span>$140</span>
              </div>
              <div className='cart-shipping'>
                <span>Shipping</span>
                <span>$10</span>
              </div>
              <div className='cart-shipping'>
                <span>Shipping Discount</span>
                <span>-$10</span>
              </div>
              <div className='cart-total'>
                <span>Total:</span>
                <span>$140</span>
              </div>
          </div>
        </div>    
      <Footer/>  
    </div>
  )
}

export default Cart
