import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SecondPage from './assets/SecondPage.jsx'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
  
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)

