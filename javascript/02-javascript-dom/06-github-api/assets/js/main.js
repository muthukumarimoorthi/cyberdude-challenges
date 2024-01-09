const ghProfileEl = document.getElementById("gitHubProfile");
console.log(gitHubProfile);
const interns = [
  "muthukumarimoorthi",
  "mshajid",
  "yrd369",
  "muthuakalya",
  "mushkir",
  "esakki2104prsnl",
  "Vk2401",
  "suriyamassmsd",
  "riyaz1000",
  "hema-venkat3",
  "bearcin46",
  "dineshdevelope",
  "jeya-rosini",
  "swethadsalvatore",
  "vedhatech002",
  "danielace1",
  "sharif-22",
  "gayathrihg",
  "kishorekumar-kp",
];

interns.forEach((name) => {
  const api = `https://api.github.com/users/${name}`;

  fetch(api)
    .then((response) => response.json())
    .then((data) => {
      const divEl = document.createElement("div");
      divEl.innerHTML= `<div
      class="max-w-2xl mx-4 mt-16 bg-[#A9B388] shadow-xl rounded-lg text-gray-900"
    >
      <div class="rounded-t-lg h-32 overflow-hidden">
        <img
          class="w-full"
          src="https://cyberdudenetworks.com/assets/img/assets/banner.png"
          alt="cyberdudenetworks"
        />
      </div>
      <div
        class="mx-auto w-32 h-32 relative -mt-16 border-4 border-black rounded-full overflow-hidden"
      >
        <img
          class="object-cover object-center h-32"
          src="${data.avatar_url}"
          alt="Intern ${data.login}"
        />
      </div>
      <div class="text-center mt-2">
        <h2 class="font-semibold">${data.login}</h2>
        <p class="text-[#38452d] font-medium">Full Stack Engineer</p>
      </div>
      <ul class="py-4 mt-2 text-gray-800 flex items-center justify-around">
        <li class="flex flex-col items-center justify-around" title="Following">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="m17.55 9.175l3.525-3.55q.3-.3.713-.3t.712.3q.3.3.3.713t-.3.712l-4.25 4.25q-.3.3-.7.3t-.7-.3l-2.125-2.125q-.3-.3-.3-.712t.3-.713q.3-.3.7-.3t.7.3zM9 12q-1.65 0-2.825-1.175T5 8q0-1.65 1.175-2.825T9 4q1.65 0 2.825 1.175T13 8q0 1.65-1.175 2.825T9 12m-8 6v-.8q0-.85.438-1.562T2.6 14.55q1.55-.775 3.15-1.162T9 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T17 17.2v.8q0 .825-.587 1.413T15 20H3q-.825 0-1.412-.587T1 18"
            />
          </svg>
          <div title="Following">${data.following}</div>
        </li>
        <li class="flex flex-col items-center justify-between" title="Followers">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 12q-1.65 0-2.825-1.175T8 8q0-1.65 1.175-2.825T12 4q1.65 0 2.825 1.175T16 8q0 1.65-1.175 2.825T12 12m-8 8v-2.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2V20z"
            />
          </svg>
          <div title="Followers">${data.followers}</div>
        </li>
        <li class="flex flex-col items-center justify-around" title="Repositories">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7a.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"
            />
          </svg>
          <div title="Repositories">${data.public_repos}</div>
        </li>
      </ul>
      <div class="p-4 border-t border-[#5F6F52] mx-8 mt-2">
        <button
          class="w-1/2 block mx-auto rounded-full bg-[#B99470] hover:bg-[#576b48] font-semibold text-[#FEFAE0] px-6 py-2"
        >
          <a href="${data.html_url}" target="_blank">Profile</a>
        </button>
      </div>
    </div>`
      gitHubProfile.append(divEl)
    });
    
 });
