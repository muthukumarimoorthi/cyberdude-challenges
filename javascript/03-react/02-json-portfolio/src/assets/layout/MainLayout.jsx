import { Outlet } from "react-router-dom";
import Mainpage from "../component/Mainpage";
import Bio from "../component/Bio";


const MainLayout = ()=>{
    return (
        <>
        <Mainpage />
        {/* <Outlet /> */}
        </>
    )
}

export default MainLayout;