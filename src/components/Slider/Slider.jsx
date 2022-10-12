import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import React, { useState } from 'react'
import {bannerData} from '../../Data/BannerData'
import './Slider.scss'


const Slider = () => {
    const [Selected, setSelected] = useState(0);

    const nextSlide = () => {
        if(Selected === bannerData.length - 1)
        {
          setSelected(0)
        }
        else{
          setSelected(Selected + 1)
        }
      }
    
      const prevSlide = () => {
        if ( Selected === 0){
            setSelected(bannerData.length - 1)
        }
        else{
            setSelected(Selected - 1)
        }
      }
      

    return(
        <div className='arrow'>
        {/* leftarrow div */}
          <div className="arrow-l">
            <ArrowLeftOutlined style={{fontSize:'50px'}} onClick={prevSlide} />
          </div>
          {/* slider-banner */}
          <div className='arrow-b' style={bannerData[Selected].bg}>
          <div className="left-i">
            <img src= {bannerData[Selected].image}
            alt=""
            style={{height:'720px'}} />
          </div>
          <div className="right-t">
            <h2>{bannerData[Selected].h2}</h2>
            <p>{bannerData[Selected].p}</p>
          </div>
          </div>
          {/* rightarrow div */}
          <div className="arrow-r">
            <ArrowRightOutlined style={{fontSize:'50px'}} onClick = {nextSlide}/>
          </div> 
        </div>
        )
};
      
      export default Slider
      
