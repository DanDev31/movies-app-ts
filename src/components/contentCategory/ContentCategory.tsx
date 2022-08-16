import React from 'react'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../redux/redux-hooks/hooks'
import { ContentCard } from '../contentCard/ContentCard'
import styles from './contentCategory.module.css'

export const ContentCategory:React.FC = () => {

  const {category} = useParams()
  const { movies } = useAppSelector(state => state.reducer.movies)

  return (
    <div className='container__styles'>
      <div className='fluid__container'>

        <h2 className={styles.category__title}>Category : <span>{category}</span></h2>

        <div className={styles.movies__container}>
          {
            movies.filter(element => element.category === category).map((movie, i) => (
              <ContentCard
                key={i} 
                id={movie.id}
                img={movie.img}
                title={movie.title}
                category={movie.category}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}







