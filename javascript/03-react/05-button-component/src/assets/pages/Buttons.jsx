import { Link } from "react-router-dom";
import CardComponent from "../components/CardComponent";
import Card from "./Card";
import Buttons from "../components/ButtonComponent";

const Button = () => {
  return (
   <div className="grid grid-cols-4 gap-5 m-10 max-w-2xl mx-auto">
        <Buttons color="blue" text="Primary" />
        <Buttons color="gray" text="Secondary" />
        <Buttons color="green" text="Success" />
        <Buttons color="red" text="Danger" />
        <Buttons color="yellow" text="Warning" />
        <Buttons color="sky" text="Info" />
        <Buttons color="slate" text="Dark" />
   </div>
  );
};

export default Button;


