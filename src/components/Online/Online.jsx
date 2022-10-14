import React from 'react';
import './Online.scss';
import { Avatar } from '@mui/material';
import app from '../../firebase/config';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';

const auth = getAuth(app)


const Online = ({correoUsuario}) => {

  const handleLogin = () => {
  setLoginUsuario(!loginUsuario)
  }

  const [loginUsuario, setLoginUsuario] = useState(false);


  return (
    <div className='Online'>
      <Avatar src="/broken-image.jpg" onClick ={handleLogin}/>
      <div className='o-block'>
        {
          loginUsuario ? <div className='o-option'>
                          <p>Bienvenido, <strong>{correoUsuario}</strong></p>
                          <button onClick={() => signOut(auth)}>Sign off</button>
                        </div>
                        :  null
        }
      </div>
    </div>
  );
}

export default Online;
