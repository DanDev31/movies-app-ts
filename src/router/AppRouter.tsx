import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { LandingPage } from '../components/landingPage/LandingPage'
import { HomeRouter } from './HomeRouter'

export const AppRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={ <LandingPage /> } />
            <Route path='/home/*' element={ <HomeRouter /> } />
        </Routes>
    </div>
  )
}
