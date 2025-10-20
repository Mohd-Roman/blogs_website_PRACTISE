import React from 'react'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import About from './pages/About'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Navbar from './components/Navbar'

const router = createBrowserRouter([
  {path:'/',element:<Home/>},
  {path:'/blogs',element:<Blog/>},
  {path:'/about',element:<About/>},
  {path:'/login',element:<Login/>},
  {path:'/signup',element:<Signup/>},
])

function App() {
  return (
    <>
    <Navbar/>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
