import { data } from "autoprefixer";
import { Link } from "react-router-dom";

const Mainpage = () => {
  return (
    <section className="max-w-screen-2xl ">
      <div className="bg-[#092635] w-screen h-screen flex flex-col space-y-4 items-center justify-center ">
        <div>
        <img
          src="https://i.ibb.co/mzM1GPN/Whats-App-Image-2024-01-31-at-15-02-39-bd0e304b.jpg"
          alt="muthukumari-image"
          className="rounded-full w-44 h-44 border-8 border-[#c0e1d5] animate-pulse"
        />
        </div>
        <div className="flex flex-col items-center justify-center">
        <h6 className="block font-sans text-4xl font-thin  text-[#c0e1d5] uppercase">
          Muthukumari M
        </h6>
        <h4 className="mb-7 mt-2 text-lg font-sans text-slate-300 font-light">
          Full Stack Engineer
        </h4>
       
          <button
            className="flex items-center shadow-lg bg-[#1B4242] gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase rounded-lg hover:bg-[#366b58]"
            type="button"
          >
           <Link to={"/bio"}>Learn More</Link>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
              class="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
           
          </button>
      
      </div>
      </div>
      
    </section>
  );
};

export default Mainpage;

