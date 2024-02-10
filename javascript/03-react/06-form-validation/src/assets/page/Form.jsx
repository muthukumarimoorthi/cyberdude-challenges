import { useState } from "react";
import ButtonComponent from "../component/ButtonComponent";
import TextAreaComponent from "../component/TextAreaComponent";
import InputComponent from "../component/InputComponent";

const Form = () => {
  const [form, setForm] = useState({
    userName: "",
    email: "",
    dateOfBirth: "",
    time: "",
  });
  const [error, setError] = useState({
    userName: null,
    email: null,
    dateOfBirth: null,
    time: null,
  });
  console.log(form);

  const formValues = (e) => {
    const { value, name } = e.target;
    console.log(value, name);

    if (name === "userName") {
      if (value.length < 4) {
        setError((prevValue) => ({
          ...prevValue,
          userName: "Username should be 3 letters",
        }));
      } else {
        setError((prevValue) => ({
          ...prevValue,
          userName: "",
        }));
      }
    }

    setForm((previousValue) => ({
      ...previousValue,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    alert(`${form.userName} your form submited`);
    
  };
  
  

  return (
    <section className="max-w-2xl mx-auto">
      <form onSubmit={submitForm}>
        <div className="space-y-3 bg-white p-7 my-10 rounded-lg">
          <div className="pt-1 pb-2 flex items-center justify-between">
            <span className="text-blue-600 text-3xl font-semibold">
              Form Validation
            </span>
            <a
              href="https://github.com/muthukumarimoorthi/cyberdude-challenges/tree/main/javascript/03-react/06-form-validation"
              target="blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
                ></path>
              </svg>
            </a>
          </div>
          <InputComponent
            label={"Username"}
            type={"text"}
            name={"userName"}
            id={"userName"}
            placeholder={"Enter your name"}
            handleOnChange={formValues}
            value={form.userName}
            required
          />
          {error.userName ? (
            <small className="px-2 rounded w-fit text-red-500">
              {error.userName}
            </small>
          ) : (
            ""
          )}

          <InputComponent
            label={"Email"}
            type={"email"}
            name={"email"}
            id={"email"}
            placeholder={"Enter your email ID"}
            handleOnChange={formValues}
            value={form.email}
            required
          />
          <InputComponent
            label={"Date"}
            type={"date"}
            name={"dateOfBirth"}
            id={"dateOfBirth"}
            handleOnChange={formValues}
            value={form.dateOfBirth}
          />
          <InputComponent
            label={"Time"}
            type={"time"}
            name={"time"}
            id={"time"}
            handleOnChange={formValues}
            value={form.time}
          />
          <TextAreaComponent label={"Message"} id={"textArea"} rows={4} />
          <ButtonComponent text="Submit" />
        </div>
      </form>
    </section>
  );
};

export default Form;
