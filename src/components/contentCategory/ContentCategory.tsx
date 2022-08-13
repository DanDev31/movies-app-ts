import React from 'react'
import { useParams } from 'react-router-dom'
import movies from '../../data/data.json'
import { ContentDetails } from '../contentDetails/ContentDetails'
import styles from './contentCategory.module.css'

export const ContentCategory:React.FC = () => {

  const {category} = useParams()

  return (
    <div className='container__styles'>
      <div className='fluid__container'>
        <h2 className={styles.category__title}>Category: <span>{category}</span></h2>

        <div className={styles.movies__container}>
          {
            movies.filter(element => element.category === category).map((movie, i) => (
              <ContentDetails
                key={i} 
                img={movie.img}
                title={movie.title}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}
