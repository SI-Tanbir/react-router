import React from 'react'
import { Link, useLoaderData } from 'react-router-dom'

function User() {


//   address
// : 
// {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
// company
// : 
// {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
// email
// : 
// "Sincere@april.biz"
// id
// : 
// 1
// name
// : 
// "Leanne Graham"
// phone
// : 
// "1-770-736-8031 x56442"
// username
// : 
// "Bret"
// website
// : 
// "hildegard.org"



    let users =useLoaderData();
  console.log(users)
    return (
    <div>

        <h2>Our Users:{users.length}</h2>

        <div className='grid grid-cols-4'>

         { users.map(res=>
          <div className='m-8 border border-amber-600 rounded-xl p-4' key={res.id}>

              <p>{res.name}</p>
              <p>{res.email}</p>
              <p>{res.website}</p>
              <Link className='bg-slate-300 rounded-lg p-1' to={`/user/${res.id}`}> click to know more..</Link>
          </div>
         )

}
        </div>
    </div>
  )
}

export default User