import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router'
import "./MainLayout.css";

const MainLayout = () => {
  return (
    <>

      <Nav />
      <Outlet />
      <footer className='footer'>All Rights Reserved</footer>
    
    </>
  )
}

export default MainLayout