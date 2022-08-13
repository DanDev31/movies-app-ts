import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/categories'
import { Slider } from '../slider/Slider'
import styles from './home.module.css'

export const Home:React.FC = () => {


  return (
    <div className={styles.home_container}>
      <div className='container'>
          {/* <Slider /> */}
          <h2 className={styles.home__title}>Explore categories</h2>
          <div className={styles.categories__container}>
            {
              categories.map((el, i) => (
                <Link to={`/home/${el.category}`} className='link' key={i}>
                  <div className={styles.categories__card} style={{background:`${el.color}`}}>
                    <h3>{el.category}</h3>
                  </div>
                </Link>
              ))
            }
            {/* <Link to="" className='link'>
              <div className={styles.categories__card}>
                <h3>Comedy</h3>
              </div>
            </Link>
            <Link to="" className='link'>
              <div className={styles.categories__card}>
                <h3>Drama</h3>
              </div>
            </Link>
            <Link to="" className='link'>
              <div className={styles.categories__card}>
                <h3>Sci-Fi</h3>
              </div>
            </Link>
            <Link to="" className='link'>
              <div className={styles.categories__card}>
                <h3>Animation</h3>
              </div>
            </Link> */}
            
          </div>
      </div>
    </div>
  )
}
