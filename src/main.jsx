import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Nav from './Nav/Nav.jsx';
import About from './components/About/About.jsx';
import Contract from './components/Contract/Contract.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import User from './components/User/User.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';

 

const router =createBrowserRouter([
  {
    path:'/',
    element:<Home></Home>,
    children:[

      {
        path:'/about',
        element:<About></About>
      },
      {
        path:'/contract',
        element:<Contract></Contract>
      },
      {
        path:'/dash',
        element:<Dashboard></Dashboard>
      },
      {
        path:'/user',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>

      },
      {
        path:'/gallery',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Gallery></Gallery>
      },
      {
        path:'/post/:postId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
