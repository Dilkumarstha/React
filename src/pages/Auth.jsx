import React from 'react'
import { Link } from 'react-router'

const Auth = () => {
  return (
    <>Auth Page:
    
    <Link to="login">Login</Link>
    <Link to="register">Register</Link>
    </>
  )
}

export default Auth