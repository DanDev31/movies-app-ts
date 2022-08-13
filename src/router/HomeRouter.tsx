import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { ContentCategory } from '../components/contentCategory/ContentCategory'
import { Home } from '../components/home/Home'

export const HomeRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/:category" element={<ContentCategory />} />
            {/* <Route path="/content/:category/" element={<ContentCategory />} /> */}
          </Routes>
    </div>
  )
}
