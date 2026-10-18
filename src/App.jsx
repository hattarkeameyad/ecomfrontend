import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import Register from './component/Register'
import Login from './component/Login'
import FeaturedProducts from './pages/FeaturedProducts'
import ProductDetails from './pages/ProductDetails'
import Categories from './pages/Categories'
import Orders from './pages/Order'
import Profile from './pages/Profile'


const App = () => {
  return <>
  <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path='/' element={<Home/>}  />
    <Route path='/Register' element={<Register/>}  />
    <Route path='/Orders' element={<Orders/>}  />
    <Route path='/Profile' element={<Profile/>}  />
    <Route path='/login' element={<Login/>}  />
    <Route path='/Categories' element={<Categories />}  />
    <Route path='/FeaturedProducts' element={<FeaturedProducts />}  />
    <Route path='/ProductDetails' element={<ProductDetails />}  />
  </Routes>
  <Footer/>
  </BrowserRouter>
  </>
}

export default App
