import React from 'react';
import './Counter.scss'

import { KeyboardArrowDown, KeyboardArrowUp } from '@material-ui/icons';

const Counter = ({stock, contador, setContador, handleAdd}) => {


  
  const handleResta = () => {
    if (contador > 1){
        setContador(contador - 1)
    }
  }

  const handleSuma = ()=> {
    if(contador < stock){
      setContador(contador + 1)
    }
  } 
  return (
      <div className='counter'>
        <div style={{
          display:'flex',
          justifyContent:'center',
          alignItems: 'center'
        }}>
          <span>Quantity</span> 
            <div className='counter-conteiner'>
              <KeyboardArrowDown
              style={{fontSize:'45px'}}
              onClick={handleResta}/>
              <div>{contador}</div>
              <KeyboardArrowUp 
              style={{fontSize:'45px'}}
              onClick={handleSuma}/>
            </div>
        </div>
        <div className='button-conteiner'>
          <button onClick={handleAdd}>Add to Car</button>
        </div>
      </div>
    
  )
}

export default Counter
