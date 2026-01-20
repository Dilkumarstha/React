import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>

       <Route path="/" element={<App />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="*" element={<PageNotFound />} />
     
    
    </Routes>
   
    </BrowserRouter>
  )
}

export default Router