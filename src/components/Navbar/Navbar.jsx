import React from 'react'
import './Navbar.scss'
import Logo from '../../Assets/astro.png'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'
import { Badge } from '@material-ui/core'
import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
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
                <Link to = 'register'>Register</Link>
                <Link to = 'sign in'>Sign In</Link>
                <Badge overlap='rectangular' badgeContent={2} color='primary'>
                  <ShoppingCartOutlined/>
                </Badge>
              </nav>
            </div> 
          <section>
            <Outlet />
          </section>
        </div>
      )
    }
    
    export default Navbar
