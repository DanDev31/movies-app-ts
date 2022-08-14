import React from 'react'
import { Link } from 'react-router-dom';
import styles from './contentCard.module.css'

interface Props {
  id:number
  img:string;
  title:string;
  category:string;
}

export const ContentCard = ({
  id,
  img,
  title,
  category
} : Props)=> {

  
  return (
    <Link to={`/home/${category}/${id}`} className='link'>
      <div className={styles.card__detail}>
        <div className={styles.card__img__container}>
          <img src={img} alt="movie pic" />
        </div>
        <h4>{title}</h4>
      </div>
    </Link>
  )
}
