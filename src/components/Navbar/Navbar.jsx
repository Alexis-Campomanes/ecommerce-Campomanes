import React, { useContext, useState } from 'react';
import './Navbar.scss';
import Logo from '../../Assets/astro.png';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Badge } from '@material-ui/core';
import { Link, Outlet } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import Avatar from '@mui/material/Avatar';





const Navbar = () => {

  const [usuario, setUsuario] = useState(null);

  const { cartQuantity } = useContext(CartContext)

    return (
        <div className='navbar-conteiner'>
        <div className='navbar'>
          <div className='left-n'>
            <div>
              <img src={Logo} alt="" />
            </div>
            <div className='search'>
              <input type="text" />
            <Search/>
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
              { usuario ? <Avatar sx={{ bgcolor: deepPurple[500] }}>OP</Avatar>
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
