import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { ContentByType } from '../components/contentByType/ContentByType'
import { ContentCategory } from '../components/contentCategory/ContentCategory'
import { ContentDetails } from '../components/contentDetails/ContentDetails'
import { Home } from '../components/home/Home'

export const HomeRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/:category" element={<ContentCategory />} />
            <Route path="/:category/:id" element={<ContentDetails />} />
            <Route path="/films" element={<ContentByType/>} />
          </Routes>
    </div>
  )
}
