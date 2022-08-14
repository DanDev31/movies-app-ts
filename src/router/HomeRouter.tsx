import React from 'react'
import {Route, Routes } from 'react-router-dom'
import { ContentCard} from '../components/contentCard/ContentCard'
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
          </Routes>
    </div>
  )
}
