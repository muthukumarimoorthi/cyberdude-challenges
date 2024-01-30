import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";
import Homepage from "../pages/Homepage";
import React from "react";
import PersonTwo from "../persons/PersonTwo";


const MainLayout = ()=> {
    return (
        <div>

            <Navbar />
            <PersonTwo/>
        
           {/* <Outlet/> */}
        </div>
    )
}

export default MainLayout;