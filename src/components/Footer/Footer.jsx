import React from 'react';
import './Footer.scss';
import github from '../../Assets/github.png';
import linkedin from '../../Assets/linkedin.png'
import medios_pago from '../../Assets/metodos_pago.png'

function Footer() {
  return (
    <div className='footer'>  
        <span>Subscribe to get the latest on sales, new releases and more</span>
          <div className='footer-email'>
            <input type="text" placeholder='Enter Your Email..' />
            <button>Send</button>
          </div>
        <span>Supportes payment systems</span>
        <img src={medios_pago} alt="" /> 
        <span>Followers</span>
        <div className="redes">
          <a href="https://github.com/Alexis-Campomanes/ecommerce-campomanes"><img src={github} alt="" /></a>
          <a href="https://www.linkedin.com/notifications/"><img src={linkedin} alt="" /></a>
        </div>
        <span>All rights reserved</span>
      </div>  
  )
}

export default Footer
