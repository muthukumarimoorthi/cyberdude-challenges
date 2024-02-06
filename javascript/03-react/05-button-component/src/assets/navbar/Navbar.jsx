import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <>
      <header className="flex items-center justify-between font-roboto px-5 py-3 bg-slate-800 text-white">
        <div>
         <h1 className="text-5xl font-caveat font-black "> <Link to={"/"}>Components</Link></h1>
        </div>
        <div>
        <ul className="flex space-x-6 pr-5 items-center text-base font-medium">
        <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/alert"}>Alert</Link></li>
          <li><Link to={"/buttons"}>Buttons</Link></li>
          <li><Link to={"/cards"}>Cards</Link></li>
         </ul>
        </div>
      </header>
      
    </>
     );
}
 
export default Navbar;