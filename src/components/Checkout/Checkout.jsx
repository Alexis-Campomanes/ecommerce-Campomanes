import React from 'react';
import './Checkout.scss';
import { useState } from 'react';

const Checkout = () => {

  const [nombre, setNombre] = useState('');
  

  const handleNombre = (e) => {
    setNombre(e.target.value)
  }

  const handleSubmit =(e) => {
    e.preventDefault()

    const orden = {
      comprador: {
        name: nombre,
        addres: 'afc',
        email: '111@123.com'
      }
    }
    console.log('submit del form')
    console.log(orden)
  }

    return (
        <div className='Checkout'>
          <h3>Checkout</h3>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                  value={nombre}
                  onChange={handleNombre}
                  type="text" 
                  placeholder='Name' />
              <input 
                  type="email" 
                  placeholder='xxx@email.com' />
              <input 
                  type="text" 
                  placeholder='Address' />
              <button type='submit'>Payment</button>
            </form>
        </div>
    );
}

export default Checkout;
