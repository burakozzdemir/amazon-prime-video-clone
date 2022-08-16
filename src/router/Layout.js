import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from  "../pages/Home"
import TvSeries from  "../pages/TvSeries"
import Movies from  "../pages/Movies"
import Categories from  "../pages/Categories"
import Login from  "../pages/Login"

const Layout = () => {
  return (
    <>
     <Routes>
        <Route path="*" element={<Home />} />
        <Route path="tvseries" element={<TvSeries />} />
        <Route path="movies" element={<Movies />} />
        <Route path="categories" element={<Categories />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  )
}

export default Layout