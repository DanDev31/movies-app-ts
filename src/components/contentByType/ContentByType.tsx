import React from 'react'
import { useAppSelector } from '../../redux/redux-hooks/hooks'
import { ContentCard } from '../contentCard/ContentCard'

import styles from './contentByType.module.css'

export const ContentByType = () => {

    const { movies, type } = useAppSelector(state => state.reducer.movies)
    const filteredMovies = movies.filter(movie => movie.type === type)
    
  return (
    <div>
        <div className={styles.films__container}>
            {
                filteredMovies.map((movie, i) => (
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
  )
}
