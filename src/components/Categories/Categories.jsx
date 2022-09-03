import React from 'react'
import './Categories.scss'
import { categoryData} from '../../Data/CategoryData';

const Categories = () => {
    return (
    <>
      <h2>promotion</h2>
        <div className='categories'>
          {categoryData.map((category, indice)=>(
              <div category={category} key={indice} className='categories-card'>
                <img src={category.image} alt="" />
              </div>  
          ))}
        </div>
    </>
      )
    
    }
    
    export default Categories
