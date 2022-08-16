import React, { useState } from 'react'
import { useAppSelector } from '../../redux/redux-hooks/hooks'
import { ContentCard } from '../contentCard/ContentCard'
import { SearchBar } from '../searchBar/SearchBar'

import styles from './contentByType.module.css'

export const ContentByType = () => {

    const [ inputValue, setInputValue ] = useState<string>('')
    const { movies, type } = useAppSelector(state => state.reducer.movies)
    const filteredMovies = movies.filter(movie => movie.type === type)
    const searchedFilms = filteredMovies.filter(movie => movie.title.toLowerCase().includes(inputValue.toLocaleLowerCase()))
    
  return (
    <div className="container__styles">
        <div className="fluid__container">
            <h3>{type}</h3>
            <SearchBar inputValue={ inputValue }  setInputValue={ setInputValue }/>
            {
                searchedFilms.length !== 0 ? (
                    <div className={styles.films__container}>
                        {
                            searchedFilms.map((movie, i) => (
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
                )
                :
                (
                    <p>No results for: {inputValue}</p>
                )
            }
        </div>
    </div>
  )
}
