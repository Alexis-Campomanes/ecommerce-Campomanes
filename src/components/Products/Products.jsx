import React from 'react'
import ProductsItem from './ProductsItem';
import { useEffect, useState } from 'react';
import { Box, CircularProgress } from '@material-ui/core';
import '../Products/Products.scss'
import { getData } from '../../Data/getData';
import { useParams } from 'react-router-dom';

const Products = () => {

    const [productos, setProductos] = useState([]);
    
    const [progress, setProgress] = useState(true);

    const { categoryId } = useParams()
      console.log (categoryId)

    useEffect(() => {

      setProgress (true)

        getData()
            .then ((res) => {
              if(!categoryId){
                setProductos(res)
              }else{
                setProductos(res.filter((prod) => prod.category === categoryId))
              }
              
            })
            .catch(error => {
              console.log(error)
            })
            .finally (()=> {
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
