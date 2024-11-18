import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    
    <div className='flex gap-10 justify-center bg-purple-500'>


        
          <Link to="/">Home</Link>
        <Link to="/contract">Contract</Link>
       <Link to="/about">About</Link>
       <Link to="/user">User</Link>
       <Link to="/dash">Dashboard</Link>


    </div>
  
)

}

export default Nav