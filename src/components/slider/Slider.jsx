import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import img1 from '../../assests/slider_img1.jpg'
import './slider.css'

export const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      className='slider'
    >
        <div className='slider__img'>
            <img src="https://www.cine.com/peliculas3/83639/83639_0.jpg"/>
        </div>
        <div className='slider__img'>
            <img src="https://i.pinimg.com/originals/91/bf/1a/91bf1a886e7256acc11cc6103b791a3f.png" />
        </div>
        <div className='slider__img'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRA-GMc1SW2NsTuankA2hCIWt9TtkyDklAmtsj7tVzL9iHoBvCQM6BnaBgx_Uf_8_TNB4&usqp=CAU" />
        </div>
        
    </Carousel>
  )
}
