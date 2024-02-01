import { useState } from "react";

const Copy = () => {
  //     const [tipAmount, setTipAmount] = useState("00:00")

  // console.log(tipAmount, setTipAmount);

  // const addTip = ()=>{
  //     console.log("Clicked");
  //     setTipAmount("12:00");
  //     tipAmount + setTipAmount

  const [name, setName] = useState("");

  const setNameMethod = (e)=>{
    setName(e.target.value)
  }

  return (
    <div className="m-10 p-5 bg-red-400">
      <div className="flex justify-between">
        <h4 className="font-sm capitalize">
          {/* Hello {name === "" ? "Username" : name}! <br /> */}
          Hello {name != "" ? name : "Username"}
        </h4>
        <div className="space-x-2">
          {/* <span>{tipAmount}</span> */}
          <input
            className="px-2 outline-none"
            type="text"
            placeholder="Enter ur name" onChange={setNameMethod}
            autoFocus
          />
          {/* <button className="bg-blue-200 rounded px-2 py-1" onClick={addTip}>Add tip</button> */}
        </div>
      </div>
    </div>
  );
};

export default Copy;
