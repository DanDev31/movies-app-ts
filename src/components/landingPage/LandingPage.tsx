import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../redux/redux-hooks/hooks'
import { handleModal } from '../../redux/userReducer'
import styles from './landingPage.module.css'

export const LandingPage:React.FC = () => {

  const { isLogged } = useAppSelector(state => state.user)
  const navigation = useNavigate()
  const dispatch = useAppDispatch()
  
  const validateAccess = ():void => {
    if(isLogged){
      navigation("/home")
    }else{
      dispatch(handleModal())
    }
  }

  return (
    <div className={styles.landingPage__container}>
      <div className={styles.landingPage__text_box}>
        <p>Movies, Series, Documentaries and more. All in one app.</p>
        <h2>Welcome to MovieS</h2>
        <button className={`btn ${styles.landing__btn}`} onClick={() => validateAccess()}>Explore</button> 
      </div>
    </div>
  )
}

