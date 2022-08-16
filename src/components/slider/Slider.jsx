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
            <img src="https://es.web.img3.acsta.net/pictures/22/01/10/10/56/3025068.jpg" />
        </div>
        <div className='slider__img'>
            <img src="https://f.rpp-noticias.io/2021/07/15/1120351red-de-disney-y-pixarjpg.jpg" />
        </div>
        <div className='slider__img'>
            <img src="https://pbs.twimg.com/media/FVnqjp1WQAAUIKg.jpg" />
        </div>
        <div className='slider__img'>
            <img src="https://cinembrollos.files.wordpress.com/2022/05/cha_cha_real_smooth.jpg" />
        </div>
        <div className='slider__img'>
            <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/480/public/media/image/2022/04/nuevos-posteres-oficiales-doctor-strange-multiverso-locura-2667437.jpg?itok=4GGVNZt2" />
        </div>
        <div className='slider__img'>
            <img src="https://i0.wp.com/www.thegoodviewer.com/wp-content/uploads/2022/06/Hustle_Poster.jpg?fit=933%2C1383&ssl=1" />
        </div>
        
    </Carousel>
  )
}
