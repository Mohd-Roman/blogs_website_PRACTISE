import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {path:'/',element:<Navbar><Home/></Navbar>},
  {path:'/blogs',element:<Navbar><Blog/></Navbar>},
  {path:'/about',element:<Navbar><About/></Navbar>},
  {path:'/login',element:<Navbar><Login/></Navbar>},
  {path:'/signup',element:<Navbar><Signup/></Navbar>},
])

function App() {
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
