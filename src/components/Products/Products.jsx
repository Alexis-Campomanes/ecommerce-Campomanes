import React from 'react'
import ProductsItem from './ProductsItem';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import '../Products/Products.scss'
import { useParams } from 'react-router-dom';
import { collection, getDocs,query, where } from 'firebase/firestore';
import { db } from '../../firebase/config'

const Products = () => {

    const [productos, setProductos] = useState([]);
    
    const [progress, setProgress] = useState(true);

    const { categoryId } = useParams()
      console.log (categoryId)

    useEffect(() => {

      setProgress (true)

      const productRef = collection(db, 'productos')
      const q = categoryId
                  ? query(productRef, where('category', '==', categoryId))
                  : productRef

      getDocs(q)
        .then((resp) => {
          const productoDB = resp.docs.map((doc) => ({id: doc.id, ...doc.data()}))
          
          setProductos(productoDB)
        })
        .finally(() => {
          setProgress(false)
        })


    }, [categoryId]);

    return (
      <>
        { progress
        ? <Box sx={{display:'flex', alignItems:'center', justifyContent:'center'}}>
          <CircularProgress />
        </Box>
        :<>
        <h2>Products</h2>
        <div className='products-data'>
            {/* mapeo del producto  para catalogo*/}
            {
                productos.map((product)=>(
                <ProductsItem key={product.id} product={product}/>
                ))
            }
        </div>
        </> 
        }
      </>
    )    
}
    
    export default Products
