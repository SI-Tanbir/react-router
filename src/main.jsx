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
      }
    ]

  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
     
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
