import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiMovie2Fill } from 'react-icons/ri'
import { CgScreen } from 'react-icons/cg'
import { FaSearch } from 'react-icons/fa'
import styles from './navbar.module.css'
import logo from '../../assests/logo.png'

export const Navbar:React.FC = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} alt="logo"/>
        </div>

        <div className={styles.navigation}>
            <div className={styles.navigation__links}>
                <Link to="/" className="link">
                    <div className={styles.navigation__item}>
                        <AiFillHome className={styles.navigation__icon}/>
                        <p>Home</p>
                    </div>
                </Link> 
                <Link to="/" className="link">
                    <div className={styles.navigation__item}>
                        <RiMovie2Fill className={styles.navigation__icon}/>
                        <p>Movies</p>
                    </div>
                </Link>
                <Link to="/" className="link">
                    <div className={styles.navigation__item}>
                        <CgScreen className={styles.navigation__icon}/>
                        <p>Series</p>
                    </div>
                </Link>  
            </div>
            <div>
                <FaSearch className={styles.search__icon}/>
            </div>
        </div>

        <button className={styles.login__button}>LOGIN</button>
    </nav>
  )
}