/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

import './App.css'
// import Card from './components/Card'
import { Home } from './components/Home/Home'
import Hero from './components/Hero/Hero'
import Layout from './components/Layout/Layout'
import Contact from './components/Contact/Contact'
// import Parent from './components/Parent/Parent'
import {Web} from './components/Web/Web'
import Mobile from './components/Mobile/Mobile'
import NotFound from './components/Not Found/NotFound404'
import About from './components/About/About'
import Gallary from './components/Gallary/Gallary'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
let routes= createBrowserRouter([
  {path:'',element:<Layout/>,children:[
    {index:true , element:<Home/>},
    {path:'contact', element:<Contact/>},
    // {path:'parent', element:<Parent/>},
    {path:'about', element:<About/>},
    {path:'hero', element:<Hero/>},
    {path:'Gallary', element:<Gallary/>, children:[
      {path:'web' ,element:<Web/>},
      {path:'mobile' ,element:<Mobile/>},
    ]},
    {path:'*',element:<NotFound/>}
  ]}
])
  return (
   <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
