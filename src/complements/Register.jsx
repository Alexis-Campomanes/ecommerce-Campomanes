import React from 'react';
import './Register.scss';
import { Formik, Field, Form } from 'formik';
import Logo from '../../src/Assets/astro.png'

const Register = () => {
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
              name: '',
              password: '',
              confirmPassword: '',
            }}

          onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          }}
          >
            <Form>
              <label htmlFor="email">Email</label>
              <Field id='email'
                    type='email'
                    name='email'
                    placeholder='Example@example.com'
              />
              <label htmlFor="name">Name</label>
              <Field id='name'
                      type='text'
                      name='name'
                      placeholder='Enter your name'
              />
              <label htmlFor="password">Password</label>
              <Field id='password'
                    type='password'
                    name='password'
                    placeholder='Enter your password'
              />
              <label htmlFor="confirmPassword">Confirm password</label>
              <Field id='confirmPassword'
                    type='password'
                    name='confirmPassword'
                    placeholder='Repeat password'
              />
              <button type='submit'>Create your account</button>
            </Form>
          </Formik>
          <span>By creating an account you agree to aur Terms of Service and Privacy Policy</span>
          </div>
        </div>
    );
}

export default Register;
