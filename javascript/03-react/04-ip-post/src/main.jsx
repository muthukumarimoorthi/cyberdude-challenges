import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import SecondPage from './assets/SecondPage.jsx'
import { Router, RouterProvider, createBrowserRouter, Link } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/post/:id",
    element: <SecondPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)

