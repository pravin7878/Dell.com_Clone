import { Home } from '@/pagas/homePage/Home'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
    </Routes>
  )
}
