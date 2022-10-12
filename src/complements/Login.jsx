import React from 'react';
import '../complements/Login.scss';
import { Formik, Field, Form, ErrorMessage} from 'formik';
import * as Yup from 'yup'
import { useState } from 'react';
import app from '../../src/firebase/config';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


const loginSchema = Yup.object().shape(
  {
    email: Yup.string()
              .email('Invalid email format')
              .required('Email is require'),
    password: Yup.string()
                .required('Password is require')
  }
) 

const auth = getAuth (app)


const Login = () => {

  const initialCredentials = {
    email: '',
    password: ''
  }

  const [registro, setRegistro] = useState(false);

  const handleSubmit = 
    async(e) => {
      e.preventDefault();
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
    <div className='login'>
        {
          <span>{registro?'Sign up':'Welcome!'}</span>
        }
        <Formik
          // *** Initial values
          initialValues = {initialCredentials}
          // *** Yup validation Schema
          validationSchema = { loginSchema }
          // *** onSubmit event
        >

        {({ errors, touched }) => (
          <Form className='l-form' onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <Field  id='email'
                    name='email'
                    type= 'email'
                    placeholder='Enter your email'
                />
                {
                  errors.email && touched.email && (
                    <ErrorMessage name="email" />
                  )
                }
                <label htmlFor="password">Password</label>
                <Field  id='password'
                        name='password'
                        type='password'
                        placeholder='Enter your email'
                />
                {
                  errors.password && touched.password && (
                    <ErrorMessage name="password" />
                  )
                }
                <button type='submit'>
                  {registro ? 'Sign up' : 'Login'}
                </button>
                <button className='btn' onClick={() => setRegistro(!registro)}>
                    {registro? 'Login': 'Sign up' }
                </button>
              </Form>
        )}
        </Formik>
  </div>
  )
}

export default Login
