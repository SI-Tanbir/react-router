import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Nav.css'
function Nav() {
  return (
    
    <nav className='flex gap-10 justify-center bg-purple-500'>


        
          <NavLink to="/">Home</NavLink>
        <NavLink to="/contract">Contract</NavLink>
        <NavLink to="/about">About</NavLink>
          
       <NavLink to="/user">User</NavLink>
       <NavLink to="/dash">Dashboard</NavLink>
       <NavLink to="/gallery">Gallery</NavLink>





    </nav>
  
)

}

export default Nav