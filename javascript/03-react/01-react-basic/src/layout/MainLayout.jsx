import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Homepage from "../pages/Homepage";
import React from "react";
import PersonTwo from "../persons/PersonTwo";
import PersonOne from "../persons/PersonOne";


const MainLayout = ()=> {
    return (
        <div>

            <Navbar />
           <Outlet/>
        </div>
    )
}

export default MainLayout;