import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai'
import { RiMovie2Fill } from 'react-icons/ri'
import { CgScreen } from 'react-icons/cg'
import styles from './navbar.module.css'
import logo from '../../assests/logo.png'
import { Modal } from '../modal/Modal'
import { Login } from '../login/Login'
import { Register } from '../login/Register'
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks/hooks'
import { handleModal, logout } from '../../redux/userReducer'
import { setType } from '../../redux/moviesReducer'

export const Navbar:React.FC = () => {


    const [ switchForm, setSwitchForm ] = useState<boolean>(false)
    const { isLogged, isModalOpen } = useAppSelector(state => state.reducer.users)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const logoutUser = ():void => {
        navigate("/")
        dispatch(logout())
    }

    const setLocalStorageValue = (e:any) => {
        let value = e.target.innerText
        if(value === "Movies"){
            dispatch(setType(value))
           
        }
        if(value === "Series"){
            dispatch(setType(value))
        }
    }

  return (
    <nav className={styles.navbar}>
        <div className={styles.logo}>
            <img src={logo} alt="logo"/>
        </div>

        {
            isLogged &&

            <div className={styles.navigation}>
                <div className={styles.navigation__links}>
                    <Link to="/home" className="link">
                        <div className={styles.navigation__item}>
                            <AiFillHome className={styles.navigation__icon}/>
                            <p>Home</p>
                        </div>
                    </Link> 
                    <Link to="/home/films" className="link">
                        <div className={styles.navigation__item} onClick={(e) => setLocalStorageValue(e)}>
                            <RiMovie2Fill className={styles.navigation__icon}/>
                            <p>Movies</p>
                        </div>
                    </Link>
                    <Link to="/home/films" className="link">
                        <div className={styles.navigation__item}  onClick={(e) => setLocalStorageValue(e)}>
                            <CgScreen className={styles.navigation__icon}/>
                            <p>Series</p>
                        </div>
                    </Link>  
                </div>
            </div>
        }

        {
            isLogged ?
            (<p className={styles.logout} onClick={() => logoutUser()}>LOGOUT</p>)
            :
            (<button className={styles.login__button} onClick={() => dispatch(handleModal())}>LOGIN</button>)
        } 
        <Modal 
            isOpen={isModalOpen}
        >
            {
                switchForm ? 
                <Register  switchForm={switchForm} setSwitchForm={setSwitchForm}/>
                :
                <Login switchForm={switchForm} setSwitchForm={setSwitchForm}/>
            }
        </Modal>
    </nav>
  )
}
