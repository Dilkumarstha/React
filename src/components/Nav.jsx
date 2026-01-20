import React from 'react'

const Nav = () => {
  return (
    <div className='navbar'>
        <div className="logo">
            LOGO
        </div>
        <ul className='nav-links'>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
        </ul>
    </div>
  )
}

export default Nav;