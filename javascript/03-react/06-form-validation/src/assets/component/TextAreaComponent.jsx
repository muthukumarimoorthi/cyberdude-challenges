import PropType from "prop-types"

const TextAreaComponent = ({id, rows, placeholder, label }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={id}
        className="font-semibold text-gray-800"
      >{label}
      </label>
      <textarea
        id={id}
        rows={rows}
        className="outline-none rounded-lg px-3 py-2 border-2  border-gray-200 focus:border-2 focus:border-blue-400 shadow w-full"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
};

TextAreaComponent.prototype = {
  label: PropType.string,
  id: PropType.string,
  rows: PropType.number,
  placeholder: PropType.string,
}

export default TextAreaComponent;
