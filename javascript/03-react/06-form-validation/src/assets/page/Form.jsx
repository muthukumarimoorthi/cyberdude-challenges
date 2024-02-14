import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  console.log(useForm());

  const info = (data) => {
    console.log(data);
  };

  return (
    <div className="m-10 bg-white p-10 rounded">
      <h1>Contact Page!</h1>
      <form className="my-4 space-y-4" onSubmit={handleSubmit(info)}>
        <input
          type="text"
          name="fullName"
          className={`px-4 py-2 bg-gray-200 outline-none w-full rounded ${
            errors.fullName ? "border-2 border-red-500" : "border-none"
          }`}
          placeholder="Full Name"
          {...register("fullName", {
            required: "This field is required",
            minLength: {
              value: 3,
              message: "This field should have atleast 3 characters",
            },
            maxLength: {
              value: 25,
              message: "You are alien!",
            },
          })}
        />
        {errors.fullName && (
          <small className="text-red-500">{errors.fullName.message}</small>
        )}
        <input
          type="text"
          name="subject"
          className="px-4 py-2 bg-gray-200 outline-none w-full rounded"
          placeholder="Subject"
          {...register("subject")}
        />
        <textarea
          name="description"
          rows="4"
          placeholder="Enter your description briefly!"
          className="px-4 py-2 bg-gray-200 outline-none w-full rounded"
          {...register("description")}
        ></textarea>
        <button className="px-4 py-2 w-full bg-slate-800 text-white rounded font-semibold">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
