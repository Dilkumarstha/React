import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import App from './App'
import About from './pages/About'
import Contact from './pages/Contact'
import PageNotFound from './pages/PageNotFound'

import MainLayout from './layouts/MainLayout'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'
import Nav from './components/Nav'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import Auth from './pages/Auth'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<App />} />
          <Route path="about" element={<About />} />
          <Route path='products' >
            <Route index element={<Products />} />
            <Route path=":id" element={<ProductDetails />} />
          </Route>
          <Route path="contact" element={<Contact />} />

          <Route path='auth' element={<>
            <Auth />
            <Outlet />
          </>}>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
          </Route>
        </Route>
        <Route path="*" element={<><Nav /> <PageNotFound /></>} />


      </Routes>

    </BrowserRouter>
  )
}

export default Router