import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { LandingPage } from '../components/landingPage/LandingPage'
import { Navbar } from '../components/navbar/Navbar'
import { HomeRouter } from './HomeRouter'
import { PrivateRoutes } from './PrivateRoutes'

export const AppRouter = () => {
  return (
    <div>
      <Navbar />
        <Routes>
            <Route path='/' element={<LandingPage />} />

            <Route path='/home/*' element={ 

              <PrivateRoutes>
              <HomeRouter /> 
            </PrivateRoutes>
            
            } />
        </Routes>
    </div>
  )
}
