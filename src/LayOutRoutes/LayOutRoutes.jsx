
import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Dishex from '../pages/Dishes/Dishex'
import Booking from '../pages/Booking/Booking'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import NotFound from '../pages/NotFound/NotFound'

function LayOutRoutes() {
  return (
    <>
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Restaurant' element={<Home/>}/>
            <Route path='/dishes' element={<Dishex/>}/>
            <Route path='/services' element={<Booking/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/*' element={<NotFound/>}/>

            
        </Routes>
        <Footer/>
    </Router>
    </>
    
  )
}

export default LayOutRoutes