import React from 'react';
import {useParams}  from 'react-router';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'


function ProductsCart() {

  const [item, setItem] = useState(null);
  const [progress, setProgress] = useState (true)
  const {itemId} = useParams(); 

  useEffect(() => {
    const docRef = doc(db, 'productos', itemId)
    getDoc(docRef)
      .then((doc) =>{
        setItem({id: doc.id, ...doc.data()})
      })
      .finally(() => {
        setProgress(false)
      })
  }, [itemId]);

  return (
    <div>
      {
          progress
          ? <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
              <CircularProgress />
            </Box>
          : <ItemDetail item = {item} />  
      }
    </div>
  )
}



export default ProductsCart

