import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PersonOne from "./persons/PersonOne";


const router = createBrowserRouter([
   {
    path: "/",
    element:<MainLayout />,
    children:[{
        path: "/",
        element: <Homepage />
    },
    {   path: "/about",
        element:<About/>

    },
    {
        path: "/contact",
        element : <Contact />
    },
]
   }
])


ReactDOM.createRoot(document.getElementById("root")).render(< RouterProvider router={router}/>)
