import React, { ChangeEvent, FormEvent, useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { findMovies } from '../../redux/moviesReducer'
import { useAppDispatch } from '../../redux/redux-hooks/hooks'
import styles from './searchBar.module.css'

interface Props {
    inputValue:string;
    setInputValue:React.Dispatch<React.SetStateAction<string>>;
}

export const SearchBar = ({inputValue, setInputValue}:Props) => {

    const handleChange = (e:ChangeEvent<HTMLInputElement>):void => {
        setInputValue(e.target.value)
    }

   

  return (
   
        <form className={styles.search__box}>
            <input type="text" 
            className={styles.search__input} 
            onChange={handleChange}
            placeholder="Type to Search..."/>
            <button className={styles.btn__search}><FaSearch className={styles.search__icon}/></button>
        </form>
    
  )
}
