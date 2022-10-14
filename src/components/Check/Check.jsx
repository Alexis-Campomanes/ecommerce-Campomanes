import React from 'react';
import './Check.scss';
import check from '../../Assets/Check.png'

const Check = () => {
    return (
        <div className='check'>
          <img src={ check } alt="" />
          <div className='c-span'>
            <span>Thanks!</span>
            <span>Buy made successfully...</span>
          </div>
          
        </div>
    );
}

export default Check;
