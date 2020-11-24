import React from 'react'
import logo from '../assets/images/logo.png'
import { Link } from 'react-router-dom'
import '../assets/css/navbar.css'

const NavBar = () => {
  return (
    <nav className="navbar nav nav-bar">
      <div className="navbar-logo">
        <img src={logo} alt={logo}></img>
      </div>
      <div>
        <Link to="/">Burger Builder</Link>
        <Link to="/signup">Signup / Login</Link>
      </div>
    </nav>
  )
}

export default NavBar
