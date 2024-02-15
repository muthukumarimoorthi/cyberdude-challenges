import PropTypes from "prop-types";

const InputComponent = ({
  id,
  name,
  handleOnChange,
  error,
  type = "text",
  placeholder,
  register,
  label,
  required,
}) => {
  return (
    <div>
      <div className="flex flex-col space-y-2">
        <label htmlFor={id} className="font-semibold text-gray-800">
          {label}
          {required ? <span className="text-red-500">*</span>:""}
        </label>
        <input
          type={type}
          name={name}
          id={name}
          placeholder={placeholder}
          {...register}
          className="outline-none rounded-lg px-3 py-2 border-2 border-gray-200 focus:border-2 focus:border-blue-400 shadow w-full"
          required={required}
        />{error && <small className="text-red-500">{error.message}</small>}
      </div>
    </div>
  );
};

InputComponent.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  register: PropTypes.object
};

export default InputComponent;
