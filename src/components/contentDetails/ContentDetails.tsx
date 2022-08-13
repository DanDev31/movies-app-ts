import React from 'react'
import { Link } from 'react-router-dom';
import styles from './contentDetails.module.css'

interface Props {
  img:string;
  title:string;
}

export const ContentDetails = ({
  img,
  title,
} : Props)=> {
  return (
    <Link to="" className='link'>
      <div className={styles.card__detail}>
        <div className={styles.card__img__container}>
          <img src={img} alt="movie image" />
        </div>
        <h4>{title}</h4>
      </div>
    </Link>
  )
}
