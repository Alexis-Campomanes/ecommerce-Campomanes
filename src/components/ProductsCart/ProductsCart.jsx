import React from 'react';
import {useParams}  from 'react-router';
import { getData } from '../../Data/getData';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import ItemDetail from '../ItemDetail/ItemDetail';



function ProductsCart() {

  const [item, setItem] = useState(null);
  const [progress, setProgress] = useState (true)
  const {itemId} = useParams(); 

  useEffect(() => {
    setProgress(true)
    getData()
    .then((res)=>{
      setItem(res.find((prod)=> prod.id === Number(itemId)))
    })
    .catch(err => console.log(err))
    .finally(()=> {
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

