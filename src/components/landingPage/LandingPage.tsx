import React from 'react'
import styles from './landingPage.module.css'

export const LandingPage:React.FC = () => {
  return (
    <div className={styles.landingPage__container}>
      <div className={styles.landingPage__text_box}>
        <p>Movies, Series, Documentaries and more. All in one app.</p>
        <h2>Welcome to MovieS</h2>
        <button className={`btn ${styles.landing__btn}`}>Explore</button> 
      </div>
    </div>
  )
}

