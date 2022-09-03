import React from 'react'
import '../complements/Login.scss'

const Login = () => {
  return (
    <div className='login-conteiner'>
      <div className='login-data'>
        <h2>Login</h2>
        <div>
          <input
          placeholder='username'/>
        </div>
        <div>
          <input
          placeholder='password' />
        </div>
        <button>Login</button>
      </div>
    </div>
  )
}

export default Login
