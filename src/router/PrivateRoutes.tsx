import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../redux/redux-hooks/hooks'

interface Props {
    children:any;
}

export const PrivateRoutes = ({children}:Props) => {

    const { isLogged } = useAppSelector(state => state.reducer.users);

  return (
    isLogged ? children : <Navigate to="/"/>
  )
}
