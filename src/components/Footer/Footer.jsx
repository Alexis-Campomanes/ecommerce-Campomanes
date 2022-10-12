import React from 'react';
import { useState } from 'react';
import './Footer.scss';
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import medios_pago from '../../Assets/metodos_pago.png';
import { Formik, Form, Field } from 'formik';
import {db} from '../../firebase/config';
import { collection, addDoc } from "firebase/firestore";





function Footer() {
  const initialEmail = {
    email: ''
  }

  const [userEmail, setUserEmail] = useState(initialEmail);

  const handleSubmit = async(values) =>{
    try{
      await addDoc(collection(db, 'usuarios'),{
        userEmail
      })
    } catch (error) {
      console.log(error)
    }
    setUserEmail({...initialEmail})
  }
  return (
    <div className='footer'>  
        <span>Subscribe to get the latest on sales, new releases and more</span>
        <Formik
            initialValues={initialEmail}
          >

        <Form className='f-form'onSubmit={handleSubmit}>
            <Field id='email' 
                  name='email'
                  type='email'
                  placeholder='Enter your mail'
            />
            <button className='f-btn' type='submit'>Send</button>
          </Form>
        </Formik>
        <span>Supportes payment systems</span>
          <img src={medios_pago} alt="" /> 
            <span>Followers</span>
              <div className="redes">
                <a href="https://github.com/Alexis-Campomanes/ecommerce-campomanes"><img src={github} alt="" /></a>
                <a href="https://www.linkedin.com/notifications/"><img src={linkedin} alt="" /></a>
              </div>
                <span>All rights reserved</span>
      </div>  
  );
}

export default Footer
