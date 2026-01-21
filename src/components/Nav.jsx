import React from 'react'
import { Link } from 'react-router';

const Nav = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            LOGO
        </div>
        <ul className='nav-links'>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/auth">Auth</Link></li>

        </ul>
    </div>
  )
}

export default Nav;