import React, { useContext, useState } from 'react';
import './Navbar.scss';
import Logo from '../../Assets/astro.png';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import Online from '../../components/Online/Online'
import app from '../../firebase/config';
import { getAuth, onAuthStateChanged } from "firebase/auth";


const auth = getAuth(app);


const Navbar = () => {



  const [usuario, setUsuario] = useState(null);

  



  onAuthStateChanged(auth, (userFirebase) => {
    if(userFirebase){
      setUsuario(userFirebase)
    }
    else{
      setUsuario(null)
    }
  });

  const { cartQuantity } = useContext(CartContext)

    return (
        <div className='navbar-conteiner'>
        <div className='navbar'>
          <div className='left-n'>
            <div>
              <img src={Logo} alt="" />
            </div>
          </div>
            
              <nav className='center-n'>
                <Link to ='/'>Home</Link>
                <Link to = '/product/wacth'>Wacth</Link>
                <Link to = '/product/sunglasses'>Sunglasses</Link>
                <Link to = '/product/headphones'>Headphones</Link>
                <Link to = '/product/smartphones'>Smarphones</Link>
              </nav>
              
              <nav className="right-n">
              { usuario ? <Online correoUsuario={usuario.email} />
                        : <Link to = '/login'>Sign In</Link>
              }
                
                <Link to='/cart'>
                  <Badge overlap='rectangular' badgeContent={cartQuantity()} color='primary'>
                    <ShoppingCartOutlined/>
                  </Badge>
                </Link>
              </nav>
            </div> 
          <section>
            <Outlet />
          </section>
        </div>
      )
    }
    
    export default Navbar
