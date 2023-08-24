import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Pokebola from '../pages/Pokebola/Pokebola'
import Details from '../pages/Details/Details'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/pokebola' element={<Pokebola />} />
        <Route path='/detail/:name/:types' element={<Details />} />
        
      </Routes>
    </BrowserRouter>
  )
}
export default Router