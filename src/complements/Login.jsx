import React from 'react';
import '../complements/Login.scss';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';


const Login = () => {

  return (
    <div className='login'>
      <div className="l-conteiner">
        <span>Welcome!</span>
        <Formik
        initialValues = {{
        email: '',
        password: ''
        }}
        
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          }}
      
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field  id='email'
                    name='email'
                    type= 'email'
                    placeholder='Enter your email'
            />
            <label htmlFor="password">Password</label>
            <Field  id='password'
                    name='password'
                    type='password'
                    placeholder='Enter your email'
            />
            <button type='submit'>Sign in</button>
          </Form>
        </Formik>
        <span>If you do not have an account, register <Link to = '/register'>here</Link></span>
    </div>
  </div>
  )
}

export default Login
