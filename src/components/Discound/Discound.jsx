import { Close } from '@material-ui/icons';
import React, { useState } from 'react';
import './Discound.scss'


const Discound = () => {
    const [deleteDiscound, setDeleteDiscound] = useState(true);

  return (
    (deleteDiscound === true )
    ?<div className='discound-conteiner'>
    <span>Do you want to receive the latest news and the hottest offers?</span>
    <Close onClick = {()=>{
        setDeleteDiscound(deleteDiscound===false)}} /> </div>
    :(<div style={{visibility:'hidden'}}></div>)

  )}

export default Discound
