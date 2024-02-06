import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";

const MainpageLayout = () => {
    return ( 
        <section>
            <Navbar />
            <Outlet />
        </section>
     );
}
 
export default MainpageLayout;