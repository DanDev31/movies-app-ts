import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { findMovies } from '../../redux/moviesReducer'
import { useAppDispatch } from '../../redux/redux-hooks/hooks'
import styles from './searchBar.module.css'

export const SearchBar = () => {

    const [inputValue, setInputValue] = useState<string>("")
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e:FormEvent<EventTarget>) => {
        e.preventDefault()
        dispatch(findMovies(inputValue))
    }


  return (
   
        <form className={styles.search__box} onSubmit={handleSubmit }>
            <button type="submit" className={styles.btn__search}><FaSearch className={styles.search__icon}/></button>
            <input type="text" 
            className={styles.search__input} 
            onChange={handleChange}
            placeholder="Type to Search..."/>
        </form>
    
  )
}
