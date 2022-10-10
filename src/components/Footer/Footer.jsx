import React from 'react';
import './Footer.scss';
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png';
import medios_pago from '../../Assets/metodos_pago.png';
import { Formik, Form, Field } from 'formik';


function Footer() {
  return (
    <div className='footer'>  
        <span>Subscribe to get the latest on sales, new releases and more</span>
        <Formik
            initialValues={{
              email: '',
            }}
            onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
            }}
          >
          <Form>
            <Field name='email'
                  type='email'
                  values='email'
                  placeholder='Enter your mail'
            />
            <button type='submit'>Send</button>
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
