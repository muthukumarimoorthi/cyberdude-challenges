import { Link } from "react-router-dom";
// import Button from "../pages/Buttons";

const Buttons = (props) => {
    console.log(props);
  return (
    <section>
        <div>
          <button
            className={`flex bg-${props.color}-500 shadow-${props.color}-500 hover:bg-opacity-85 items-center shadow-sm gap-2 px-8 py-3 font-sans text-md font-bold text-center text-white capitalize rounded-lg`}
            type="button"
          >
            {props.text}
          </button>
        </div>
      {/* <div className="max-w-2xl mx-auto gap-4 grid grid-cols-4">
        
        {/* <div>
          <button
            className="flex items-center shadow-gray-500 shadow-sm bg-gray-500 gap-2 px-8 py-3 font-sans text-md font-bold text-center text-white capitalize rounded-lg hover:bg-gray-600"
            type="button"
            name="Secondary"
          >
            <Link to={"/"}>Secondary</Link>
          </button>
        </div>
        <div>
          <button
            className="flex items-center shadow-green-500 shadow-sm bg-green-500 gap-2 px-8 py-3 font-sans text-md font-bold text-center text-white capitalize rounded-lg hover:bg-green-600"
            type="button"
            name="Success"
          >
            <Link to={"/"}>Success</Link>
          </button>
        </div>
        <div>
          <button
            className="flex items-center shadow-red-500 shadow-sm bg-red-500 gap-2 px-8 py-3 font-sans text-md font-bold text-center text-white capitalize rounded-lg hover:bg-red-600"
            name="Danger"
            type="button"
          >
            <Link to={"/"}>Danger</Link>
          </button>
        </div>
        <div>
          <button
            className="flex items-center shadow-yellow-500 shadow-sm bg-yellow-500 gap-2 px-8 py-3 font-sans text-md font-bold text-center text-black capitalize rounded-lg hover:bg-yellow-600"
            type="button"
            name="Warning"
          >
            <Link to={"/"}>Warning</Link>
          </button>
        </div>
        <div>
          <button
            className="flex items-center shadow-sky-500 shadow-sm bg-sky-400 gap-2 px-8 py-3 font-sans text-md font-bold text-center text-white capitalize rounded-lg hover:bg-sky-500"
            type="button"
            name="Info"
          >
            <Link to={"/"}>Info</Link>
          </button>
        </div>
        <div>
          <button
            className="flex items-center shadow-black shadow-sm bg-white gap-2 px-8 py-3 font-sans text-md font-bold text-center text-black capitalize rounded-lg hover:bg-gray-100"
            type="button"
            name="Light"
          >
            <Link to={"/"}>Light</Link>
          </button>
        </div>
        <div>
          <button
            className="flex items-center shadow-gray-500 shadow-sm bg-black gap-2 px-8 py-3 font-sans text-md font-bold text-center text-white capitalize rounded-lg hover:bg-gray-800"
            type="button"
          >
            <Link to={"/"}>Dark</Link>
          </button>
        </div> */}
      {/* </div> */}
    </section>
  );
};

export default Buttons;

{/* <span className="text-black animate-bounce">
  {" "}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
  >
    <path
      fill="currentColor"
      d="m6.8 13l2.9 2.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275l-4.6-4.6q-.15-.15-.213-.325T3.426 12q0-.2.063-.375T3.7 11.3l4.6-4.6q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L6.8 11H20q.425 0 .713.288T21 12q0 .425-.288.713T20 13z"
    ></path>
  </svg>
</span>; */}
