import React from "react";

const About = () => {
  return (
    <div className="rounded-xl flex text-gray-700 justify-between bg-slate-800 my-10 shadow-lg shadow-black items-center mx-10">
      <div className="w-2/5 m-0 overflow-hidden bg-slate-300 text-gray-700 rounded-r-none rounded-xl shrink-0">
        <img
          src="https://media.licdn.com/dms/image/D5603AQHVnV-QApQlhg/profile-displayphoto-shrink_800_800/0/1705918213009?e=1711584000&v=beta&t=LUIIEcYgXLeeFZ2ylp5tASg51YjAp9myFC9ZNd0XMGo"
          alt="card-image"
          class="w-full h-full"
        />
      </div>
      <div className="p-6">
        <h6 className="block font-sans text-4xl font-semibold  text-gray-100 uppercase">
          Muthukumari M
        </h6>
        <h4 className="mb-7 text-xl font-sans text-gray-500 font-medium">
          Full Stack Engineer
        </h4>
        <p className="mb-4 text-sm text-gray-200 font-roboto font-medium text-justify">
          As a Full Stack Developer I am working with a team as an Intern, where
          I learned and sharpen my skill and learned to adapt to different
          scenarios. I am eager to learn type and can handle a pressure to meet
          the deadline. My Passion to Full Stack Developer begin when I was just
          surfing through a website.
        </p>
        <a
          href="https://www.linkedin.com/in/muthukumari-m-8a1415221/"
          target="blank"
        >
          <button
            className="flex items-center bg-slate-600 gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase rounded-lg hover:bg-slate-700"
            type="button"
          >
            Learn More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
