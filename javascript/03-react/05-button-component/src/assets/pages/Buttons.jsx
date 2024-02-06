import CardComponent from "../components/CardComponent";
import Card from "./Card";

const Button = () => {
    return ( 
        <div>
            <div className="bg-green-600 flex items-center justify-center text-7xl h-screen w-screen">
            Hi i'm Button
        </div>
        <CardComponent name={4} role={55566} image="" />
        </div>
     );
}
 
export default Button;