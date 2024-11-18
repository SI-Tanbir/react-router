import React from 'react'
import { useLoaderData } from 'react-router-dom'

function User() {
    let users =useLoaderData();
  return (
    <div>

        <h2>Our Users:{users.length}</h2>
    </div>
  )
}

export default User