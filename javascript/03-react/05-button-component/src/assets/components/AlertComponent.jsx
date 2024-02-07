const Alerts = (props) => {
    console.log(props);
    return (
      <section>
        <div
          className={`border max-w-3xl mx-auto rounded border-${props.color}-400 w-full text-center p-5 bg-${props.color}-950 hover:bg-${props.color}-900 shadow-sm shadow-${props.color}-600`}
        >
          <span className="text-white">{props.text}</span>
        </div>
        {/* <div className="border max-w-3xl mx-auto  rounded border-gray-900 w-full text-center p-5 bg-gray-800 hover:bg-gray-800 shadow-sm shadow-slate-500">
          <span className="text-white">
            A simple secondary alert—check it out!
          </span>
        </div>
        <div className="border max-w-3xl mx-auto  rounded border-green-600 w-full text-center p-5 bg-green-950 hover:bg-green-800 shadow-sm shadow-slate-500">
          <span className="text-white">
          A simple success alert—check it out!
          </span>
        </div>
        <div className="border max-w-3xl mx-auto  rounded border-red-700 w-full text-center p-5 bg-orange-950 hover:bg-red-900 shadow-sm shadow-red-500">
          <span className="text-white">
          A simple danger alert—check it out!
          </span>
        </div>
        <div className="border max-w-3xl mx-auto  rounded border-yellow-600 w-full text-center p-5 bg-yellow-900 hover:bg-yellow-800 shadow-sm shadow-yellow-500">
          <span className="text-white">
          A simple warning alert—check it out!
          </span>
        </div>
        <div className="border max-w-3xl mx-auto  rounded border-sky-600 w-full text-center p-5 bg-sky-950 hover:bg-sky-900 shadow-sm shadow-sky-500">
          <span className="text-white">
          A simple info alert—check it out!
          </span>
        </div>
        <div className="border max-w-3xl mx-auto  rounded border-slate-400 w-full text-center p-5 bg-slate-700 hover:bg-slate-800 shadow-sm shadow-slate-500">
          <span className="text-white">
          A simple light alert—check it out!
          </span>
        </div>
        <div className="border max-w-3xl mx-auto  rounded border-slate-600 w-full text-center p-5 bg-slate-900 hover:bg-slate-800 shadow-sm shadow-slate-500">
          <span className="text-white">
          A simple dark alert—check it out!
          </span>
        </div> */}
      </section>
    );
  };
  
  export default Alerts;