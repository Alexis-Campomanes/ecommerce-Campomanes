import React from 'react';
import { useState } from 'react';
import './Register.scss';
import { Formik, Field, Form } from 'formik';
import Logo from '../../src/Assets/astro.png';
import app  from '../firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const auth = getAuth( app )


const Register = () => {

  const [registro, setRegistro] = useState(true);

  const handleSubmit = 
    async(e) => {
      e.preventDefault()
      await new Promise ((resolve, reject) => {
        const correo = e.target.email.value
        const contraseña = e.target.password.value
        if(registro){
          resolve (createUserWithEmailAndPassword(auth, correo, contraseña))
        }else{
          reject (signInWithEmailAndPassword(auth, correo, contraseña))
        }
      })
    }
  
    return (
        <div className='register'>
          <div className="r-left">
            <img src={ Logo } alt="" />
          </div>
          <div className="r-right">
          <span>Create your account</span>
          <span>Create an account to view</span>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}> 
            <Form onSubmit={handleSubmit}>
              <label htmlFor="email">Email</label>
              <Field id='email'
                    type='email'
                    name='email'
                    placeholder='Example@example.com'
              />
              <label htmlFor="password">Password</label>
              <Field id='password'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
              />
              <button type='submit'>Register</button>
            </Form>
          </Formik>
          <span>By creating an account you agree to aur Terms of Service and Privacy Policy</span>
          </div>
        </div>
    );
}

export default Register;
