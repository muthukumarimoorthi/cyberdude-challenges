import PropTypes from "prop-types";

const ButtonComponent = ({ text }) => {
  return (
    <>
      <button
        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-md w-full text-sm px-5 py-2.5 outline-none"
      >
        {text}
      </button>
    </>
  );
};

ButtonComponent.prototype = {
  text: PropTypes.string,
};

export default ButtonComponent;
