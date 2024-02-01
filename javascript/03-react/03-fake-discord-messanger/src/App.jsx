import { useState } from "react";

const App = () => {
  const [time, setTime] = useState("00:00");

  const setTimeMethod = (e) => {
    setTime(e.target.value);
  };

  const [name, setName] = useState("Person 1");
  const setNameMethod = (e) => {
    setName(e.target.value);
  };

  const [percent, setPercent] = useState("28");
  const setPercentMethod = (e) => {
    setPercent(e.target.value);
  };

  const [operator, setOperator] = useState("LTE");
  const setOperatorMethod = (e) => {
    setOperator(e.target.value);
  };

  const [date, setDate] = useState("dd-mm-yyyy");
  const setDateMethod = (e) => {
    setDate(e.target.value);
  };

  const [name2, setName2]=useState("Person 2");
  const setNameMethod2=(e)=>{
    setName2(e.target.value);
  }

  const [username, setUsername] =useState("username");
  const setUsernameMethod =(e)=>{
    setUsername(e.target.value);
  }

  const [mutualServer, setMutualServer] = useState("1");
  const setMutualServerMethod = (e)=>{
    setMutualServer(e.target.value);
  }

  return (
    <section>
      <section className="grid sm:grid-cols-2 sm:m-10 m-2 md:m-4">
        {/* Typing... */}
        <section className="bg-slate-800 text-slate-50">
          <div className="grid grid-cols-2">
            <div className="p-5">
              <label
                htmlFor="time"
                className="block mb-2 text-sm font-medium text-gray-50"
              />
              Time
              <input
                type="time"
                id="time"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="10:00 PM"
                required
                autoFocus
                onChange={setTimeMethod}
              />
            </div>
            <div className="p-5">
              <label
                htmlFor="batteryPercent"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Battery Percent
              </label>
              <input
                type="text"
                id="batteryPercent"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="28"
                onChange={setPercentMethod}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-5">
              <label
                htmlFor="operator"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Operator
              </label>
              <input
                type="text"
                id="operator"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="5G / 4G / LTE"
                onChange={setOperatorMethod}
                required
              />
            </div>
            <div className="p-5">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Date
              </label>
              <input
                type="date"
                id="date"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="10:00 PM"
                onChange={setDateMethod}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-5">
              <label
                htmlFor="person1"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Person 1
              </label>
              <input
                type="text"
                id="person1"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="Ex: Abi Thetchana"
                onChange={setNameMethod}
                required
              />
            </div>
            <div className="p-5">
              <label
                htmlFor="person2"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Person 2
              </label>
              <input
                type="text"
                id="person2"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="Shajidkir" onChange={setNameMethod2}
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-2">
            <div className="p-5">
              <label
                htmlFor="userName"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
               Person 1 Username
              </label>
              <input
                type="text"
                id="userName"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="abi_thetchana" onChange={setUsernameMethod}
                required
              />
            </div>
            <div className="p-5">
              <label
                htmlFor="mutualServer"
                className="block mb-2 text-sm font-medium text-gray-50 "
              >
                Mutual Server
              </label>
              <input
                type="text"
                id="mutualServer"
                className=" border-gray-400 text-gray-50 text-sm bg-transparent focus:border-blue-800 w-full p-2.5 outline-none border-b focus:shadow-lg fucus:shadow-blue-600"
                placeholder="1 / 2 / 3"
                required onChange={setMutualServerMethod}
              />
            </div>
          </div>
          <div className="p-5">
            <label
              htmlFor="person1message"
              className="block mb-2 text-sm font-medium"
            >
              Person 1 Message
            </label>
            <textarea
              id="person1message"
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-50 bg-gray-50 bg-transparent focus:border-blue-800 rounded-lg border border-gray-300 outline-none"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <div className="p-5">
            <label
              htmlFor="person2message"
              className="block mb-2 text-sm font-medium"
            >
              Person 2 Message
            </label>
            <textarea
              id="person2message"
              rows="2"
              className="block p-2.5 w-full text-sm text-gray-50 bg-gray-50 bg-transparent focus:border-blue-800 rounded-lg border border-gray-300 outline-none"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
        </section>
        {/* Chat screen */}
        <section className="bg-[#5865F2]">
          <div className="my-5 bg-black sm:max-w-md max-w-sm sm:mx-auto text-white rounded-lg mx-auto">
            <div className="max-w-md mx-auto flex justify-between px-3 py-1">
              <div>
                <span className="text-xs font-semibold">{time}</span>
              </div>
              <div className="flex items-center">
                <span className="text-xs font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M198.12 25.23a16 16 0 0 0-17.44 3.46l-160 160A16 16 0 0 0 32 216h160a16 16 0 0 0 16-16V40a15.94 15.94 0 0 0-9.88-14.77M192 200h-24V64l24-24Z"
                    ></path>
                  </svg>
                </span>
                <span className="text-xs font-semibold">{operator} </span>

                <span className="text-xs font-semibold">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M14.47 13.5L11 20v-5.5H9l.53-1H7v7.17C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V13.5z"
                    ></path>
                    <path
                      fill="currentColor"
                      fillOpacity=".3"
                      d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v8.17h2.53L13 7v5.5h2l-.53 1H17V5.33C17 4.6 16.4 4 15.67 4"
                    ></path>
                  </svg>
                </span>
                <span className="text-xs font-semibold">
                  {percent}
                  <span>%</span>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center mt-3 mb-2 px-3 py-1">
              <div className="flex items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12q0-.2.063-.375T4.7 11.3l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12q0 .425-.288.713T19 13z"
                    ></path>
                  </svg>
                </span>
                <span>
                  <img
                    src="https://cdn3.emoji.gg/emojis/4559-discord.png"
                    alt="discord-avatar"
                    className="w-12 h-12 rounded-full bg-white hover:bg-black"
                  />
                </span>
                <span className="text-sm font-semibold capitalize">
                  {name != "" ? name : "Person 1"}
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
                    ></path>
                  </svg>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M15 12h2a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3m4 0h2c0-5-4.03-9-9-9v2c3.86 0 7 3.13 7 7m1 3.5c-1.25 0-2.45-.2-3.57-.57c-.35-.11-.74-.03-1.02.25l-2.2 2.2a15.097 15.097 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1a17 17 0 0 0 17 17a1 1 0 0 0 1-1v-3.5a1 1 0 0 0-1-1"
                    ></path>
                  </svg>
                </span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="27"
                    height="27"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M5 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-1.586l2.293 2.293A1 1 0 0 0 22 16V8a1 1 0 0 0-1.707-.707L18 9.586V8a3 3 0 0 0-3-3z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </div>
            </div>
            <hr className="border-gray-800" />
            <div className="px-5 pt-6 flex flex-col">
              <span>
                <img
                  src="https://cdn3.emoji.gg/emojis/4559-discord.png"
                  alt="discord-avatar"
                  className="w-12 h-12 rounded-full bg-white hover:bg-black"
                />
              </span>
              <span className="text-lg font-bold pt-1 capitalize">
                {name != "" ? name : "Person 1"}
              </span>
              <span className="text-sm font-semibold text-gray-400">
                {username}
              </span>
              <span className="text-xs font-base text-gray-400">
                This is the very beginning of your legendary conversation with{" "}
                <span className="capitalize">
                  {name != "" ? name : "Person 1"}
                </span>
                .
              </span>
              <div className="flex items-center space-x-2 py-3">
                <span>
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
                    alt="discord-avatar"
                    className="w-8 h-8 rounded-xl bg-white hover:bg-black"
                  />
                </span>
                <span className="text-xs font-base text-gray-400">
                  <span>{mutualServer}</span> Mutual Server
                </span>
              </div>
            </div>
            <div className="grid grid-cols-3 items-center px-20">
              <hr className="border-gray-500 h-0.5 bg-gray-600 rounded-lg" />
              <span className="text-center text-xs font-semibold text-gray-500">
                {date}
              </span>
              <hr className="border-gray-500 h-0.5 bg-gray-600 rounded-lg" />
            </div>
            <div className="font pb-32">
              <div className="py-4 px-5">
                <div className=" font-semibold flex items-center space-x-2 text-gray-400">
                  <div>
                    <span>
                      <img
                        src="https://cdn3.emoji.gg/emojis/4559-discord.png"
                        alt="discord-avatar"
                        className="w-9 h-9 rounded-full bg-white hover:bg-black"
                      />
                    </span>
                  </div>
                  <div className="text-xs flex items-center space-x-1">
                    <span className="capitalize">
                      {name != "" ? name : "Person 1"}{" "}
                    </span>
                    <span> {date}</span>
                    <span>12:45</span>
                  </div>
                </div>
                <div className="mx-11 rounded-lg">
                  <span className="text-xs">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  </span>
                </div>
              </div>
              <div className="pb-5 px-5">
                <div className=" font-semibold flex items-center space-x-2 text-gray-400">
                  <div>
                    <span>
                      <img
                        src="https://i.pinimg.com/564x/31/f1/23/31f1231af69beb6617062dbf3373131c.jpg"
                        alt="discord-avatar"
                        className="w-9 h-9 rounded-full bg-white hover:bg-black"
                      />
                    </span>
                  </div>
                  <div className="text-xs flex items-center space-x-1">
                    <span className="capitalize">{name2 != "" ? name2 : "Person 2"}</span>
                    <span> {date}</span>
                    <span>12:45</span>
                  </div>
                </div>
                <div className="mx-11 rounded-lg">
                  <span className="text-xs">
                    Ipsum necessitatibus commodi excepturi sequi quos pariatur
                    incidunt, ipsa optio soluta, inventore in error id odio
                    doloremque perspiciatis. Totam ipsam ratione dolorum.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default App;
