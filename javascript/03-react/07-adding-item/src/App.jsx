import React, { useState } from "react";

const App = () => {
  const [value, setValue] = useState("");
  const [task, setTask] = useState([]);
  const handleSubmit = (e) => {
    // preventing page refresh
    e.preventDefault();

    console.log(value);
    setTask(task.concat([value]));

    //resetting the input field after submitting the form
    setValue("");
  };

  const removeTask = (idToRemove) => {
    const updateArray = task.filter((task, index) => {
      return index !== idToRemove;
    });
    setTask(updateArray);
  };
  return (
    <section className="h-screen bg-orange-400 p-10 ">
      <div className="bg-white p-10 max-w-3xl mx-auto rounded backdrop-blur-0 shadow-2xl">
        <div className="flex items-center justify-between">
        <h1 className=" text-3xl">To - Do List</h1>
        <a href="https://github.com/muthukumarimoorthi/cyberdude-challenges/tree/main/javascript/03-react/07-adding-item" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg></a>
        </div>

        <form className="pt-10 pb-5 " onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Add task"
            name="addTask"
            className=" py-3 bg-gray-200 px-5 w-[85%] rounded-l-xl outline-none text-gray-700"
            value={value}
            onChange={(e) => setValue(e.target.value)} autoFocus
          />
          <button
            className="bg-orange-500 rounded-r-xl  py-3 w-[15%] text-white hover:bg-orange-600"
            type="submit"
          >
            Add
          </button>
        </form>

        <ul className="">
          {task.map((task, index) => {
            return (
              <div className="bg-orange-500 text-white text-lg my-2 rounded px-5 py-3 w-[full] flex justify-between">
                <span className=" " key={index}>{`${
                  index + 1
                }) ${task}`}</span>
                <button className="text-white" onClick={() => removeTask(index)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="m12 13.4l-4.9 4.9q-.275.275-.7.275t-.7-.275q-.275-.275-.275-.7t.275-.7l4.9-4.9l-4.9-4.9q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275l4.9 4.9l4.9-4.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7L13.4 12l4.9 4.9q.275.275.275.7t-.275.7q-.275.275-.7.275t-.7-.275z"
                    ></path>
                  </svg>
                </button>
              </div>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default App;