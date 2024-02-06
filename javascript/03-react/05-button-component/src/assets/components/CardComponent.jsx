import { Link } from "react-router-dom";
import Card from "../pages/Card";
import PropTypes from 'prop-types';


const CardComponent = (props) => {
  console.log(props);
  return (
    <section className="m-5">
    <div className="relative flex flex-col text-gray-700 bg-white shadow-lg shadow-black rounded w-96">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 shadow-gray-500 shadow-md bg-clip-border rounded h-80">
        <img
          src={props.image}
          alt={`${props.name}.img`}
        />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl font-semibold text-gray-800">
          {props.name}
        </h4>
        <p className="block font-sans text-base font-medium text-gray-800">
          {props.role}
        </p>
      </div>
      <div className="flex justify-center p-6 pt-2 gap-7">
        <Link to={props.instagram} className="text-[#E1306C] cursor-pointer hover:animate-bounce" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
            ></path>
          </svg>
        </Link>
        <Link to={props.facebook} className="text-[#316FF6] cursor-pointer hover:animate-bounce" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M26.67 4H5.33A1.34 1.34 0 0 0 4 5.33v21.34A1.34 1.34 0 0 0 5.33 28h11.49v-9.28H13.7v-3.63h3.12v-2.67c0-3.1 1.89-4.79 4.67-4.79c.93 0 1.86 0 2.79.14V11h-1.91c-1.51 0-1.8.72-1.8 1.77v2.31h3.6l-.47 3.63h-3.13V28h6.1A1.34 1.34 0 0 0 28 26.67V5.33A1.34 1.34 0 0 0 26.67 4"
            ></path>
          </svg>
        </Link>
        <Link to={props.github} className="text-[#333] cursor-pointer hover:animate-bounce" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
            ></path>
          </svg>
        </Link>
        <Link to={props.linkedin} className="text-[#0A66C2] hover:animate-bounce" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2em"
            height="2em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
            ></path>
          </svg>
        </Link>
        <Link to={props.twitter} className="text-[#1DA1F2] hover:animate-bounce" target="_blank">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  </section>
  );
};

CardComponent.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  role: PropTypes.string,
  instagram: PropTypes.string,
  facebook: PropTypes.string,
  github: PropTypes.string,
  linkedin: PropTypes.string,
  twitter: PropTypes.string

}

export default CardComponent;
