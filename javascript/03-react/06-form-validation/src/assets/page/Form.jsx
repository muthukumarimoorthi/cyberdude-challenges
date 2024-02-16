import { useForm } from "react-hook-form";
import InputComponent from "../component/InputComponent";
import { zodResolver } from "@hookform/resolvers/zod" 
import { z } from "zod"

const formSchema = z.object({
  fullName : z.string().min(3).max(20),
  email: z.string().email()
})

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema)
  });

  const info = (data) => {
    console.log(data);
  };

  return (
    <div>
      <div className="m-10 bg-white p-10 rounded max-w-md mx-auto items-center">
        <div className="flex items-center justify-center space-x-2"><h1 className="text-2xl font-medium text-center pb-2">Contact Page!</h1>
        <a href="https://github.com/muthukumarimoorthi/cyberdude-challenges/tree/main/javascript/03-react/06-form-validation" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"></path></svg></a>
        </div>
        <form className="my-4 space-y-4" onSubmit={handleSubmit(info)}>
          <InputComponent
            label={"Name"}
            name={"fullName"}
            placeholder={"Enter your fullname"}
            register={register("fullName", {required: true})}
            required
            error={errors.fullName}
          />
    
          <InputComponent
            label={"Email"}
            name={"email"}
            placeholder={"Enter your email"}
            register={register("email", {required: true})}
            required
            error={errors.email}
          />
          <button className="px-4 py-2 w-full bg-blue-400 hover:bg-blue-500 text-white rounded-lg font-semibold">
            Submit
          </button>

          {/* <input
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
         */}
          
        </form>
      </div>
    </div>
  );
};

export default Form;
