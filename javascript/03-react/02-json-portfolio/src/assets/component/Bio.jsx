import { Link } from "react-router-dom";
import bioData from "../data/Data.json";

const Bio = () => {
  const jsonData = bioData[0];
  return (
    <section className="max-w-screen-lg mx-auto my-5 rounded-sm ">
      <div className="bg-white rounded-md">
        
        <div>
          <img
            src="https://media.licdn.com/dms/image/D5616AQE0uB7jZyS8FQ/profile-displaybackgroundimage-shrink_350_1400/0/1697130736068?e=1712188800&v=beta&t=undXaHO8wx-SkbmGSuKEIeZYkaop2nHukbEzQ1zMhk8"
            alt="cover-img"
            className="rounded-t-lg"
          />
        </div>
        <div className=" mx-auto w-44 h-44 relative -mt-16 border-8 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center"
            src={jsonData.image}
            alt="muthukumari"
          />
        </div>
        <div className="flex flex-col items-center justify-between py-8">
          <div className="flex items-center justify-center space-x-2">
            <span className="font-sans text-xl">{jsonData.name}</span>
            <span className="font-normal text-gray-500">
              {jsonData.pronouns}
            </span>
          </div>
          <div className="font-normal text-gray-500">{jsonData.position}</div>
          <div>
            <span className="font-normal text-gray-500 text-xs">
              {jsonData.place}
            </span>
          </div>
          <div className="flex items-center mt-2">
        <button
            className="flex items-center shadow-lg bg-[#1B4242] gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-white uppercase rounded-lg hover:bg-[#366b58]"
            type="button"
          >
           <Link to={"/"}>Back Home</Link>
           <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M20 11H6.83l2.88-2.88A.996.996 0 1 0 8.3 6.71L3.71 11.3a.996.996 0 0 0 0 1.41L8.3 17.3a.996.996 0 1 0 1.41-1.41L6.83 13H20c.55 0 1-.45 1-1s-.45-1-1-1"></path></svg>
           
          </button>
        </div>
        </div>
      </div>
      <div className="my-2 bg-white rounded-md px-7 py-8 flex flex-col space-y-2">
        <span className="text-2xl font-base">About</span>

        <span className="text-sm text-gray-700">{jsonData.about[0]}</span>
        <span className="text-sm text-gray-700">{jsonData.about[1]}</span>
        <span className="text-sm text-gray-700">{jsonData.about[2]}</span>
        <span className="text-sm text-gray-700">{jsonData.about[3]}</span>
      </div>
      <div className="my-2 bg-white rounded-md px-7 py-8 flex flex-col space-y-2">
        <span className="text-2xl font-base">Education</span>
        <div className="flex items-center space-x-5">
          <div>
            <img
              src={jsonData.education[0].educationImage}
              className="w-20 h-20"
              alt="cyberdude"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-gray-800">
              {jsonData.education[0].schoolOrCollege}
            </span>
            <span className="text-sm text-gray-600">
              {jsonData.education[0].degree}
            </span>
            <span className="text-sm text-gray-600">
              {jsonData.education[0].educationYears}
            </span>
          </div>
        </div>
      </div>
      <div className="my-2 bg-white rounded-md px-7 py-8 flex flex-col space-y-2">
        <span className="text-2xl font-base">Experience</span>
        <div className="flex items-center space-x-5">
          <div>
            <img
              src="https://media.licdn.com/dms/image/D560BAQFI_zxYO6fHfQ/company-logo_100_100/0/1690363278468/cyberdude_networks_logo?e=1714608000&v=beta&t=u67D4LBIPrZTqDGzoSR82ZCHRgW1qbrt8Wa8k5Pr7Ds"
              className="w-20 h-20"
              alt="cyberdude"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-normal text-gray-800">
              Full Stack Engineer
            </span>
            <span className="text-sm text-gray-600">
              CyberDude Networks Private Limited · Internship
            </span>
            <span className="text-sm text-gray-600">
              Sep 2023 - Present · 5 mos
            </span>
            <span className="text-sm text-gray-600">
              Chennai, Tamil Nadu, India · On-site
            </span>
          </div>
        </div>
      </div>
      <div className="my-2 bg-white rounded-md px-7 py-8 space-y-4">
        <span className="text-2xl font-base">Projects</span>
        <div className="grid grid-cols-2">
          <div class="relative flex flex-col mt-6 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-96">
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl text-blue-gray-900">
                {jsonData.projects[0].projectNames}
              </h5>
              <p className="block font-sans text-base font-light">
                {jsonData.projects[0].projectReview}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                <a href={jsonData.projects[0].urlLink} target="blank">
                  View GitHub
                </a>
              </button>
            </div>
          </div>
          <div class="relative flex flex-col mt-6 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-96">
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl text-blue-gray-900">
                {jsonData.projects[1].projectNames}
              </h5>
              <p className="block font-sans text-base font-light">
                {jsonData.projects[1].projectReview}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                <a href={jsonData.projects[1].urlLink} target="blank">
                  View GitHub
                </a>
              </button>
            </div>
          </div>
          <div class="relative flex flex-col mt-6 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-96">
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl text-blue-gray-900">
                {jsonData.projects[2].projectNames}
              </h5>
              <p className="block font-sans text-base font-light">
                {jsonData.projects[2].projectReview}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                <a href={jsonData.projects[2].urlLink} target="blank">
                  View GitHub
                </a>
              </button>
            </div>
          </div>
          <div class="relative flex flex-col mt-6 text-gray-700 bg-gray-200 shadow-md bg-clip-border rounded-xl w-96">
            <div className="p-6">
              <h5 className="block mb-2 font-sans text-xl text-blue-gray-900">
                {jsonData.projects[3].projectNames}
              </h5>
              <p className="block font-sans text-base font-light">
                {jsonData.projects[3].projectReview}
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                className="font-sans font-bold text-center uppercase text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
                type="button"
              >
                <a href={jsonData.projects[3].urlLink} target="blank">
                  View GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Bio;
