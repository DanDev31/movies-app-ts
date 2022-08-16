import React, { ChangeEvent } from 'react'
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
        </form>
    
  )
}
