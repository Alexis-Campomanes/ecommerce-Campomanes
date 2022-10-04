import React from 'react';
import './Checkout.scss';
import { useState } from 'react';


const Checkout = () => {


  const [values, setValues] = useState({
    name: '',
    email: '',
    addres: '',
  });
  
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit =(e) => {
    e.preventDefault()

    const orden = {
      comprador: values,
    }
    console.log('submit del form')
    console.log(orden)

    if(values.name.length < 3) {
      alert('Incorrect name')
      return
    }

    if(values.email.length < 2) {
      alert('Email incorrect')
      return
    }
  }

    return (
        <div className='Checkout'>
          <h3>Checkout</h3>
            <br />
            <form onSubmit={handleSubmit}>
              <input
                  name='name'
                  onChange={handleInputChange}
                  value={values.nombre}
                  type="text" 
                  placeholder='Name' />
              <input
                  name='email'
                  onChange={handleInputChange}
                  values={values.email}
                  type="email" 
                  placeholder='xxx@email.com' />
              <input
                  name='addres'
                  onChange={handleInputChange}
                  values={values.addres}
                  type="text" 
                  placeholder='Address' />
              <button type='submit'>Payment</button>
            </form>
        </div>
    );
}

export default Checkout;
