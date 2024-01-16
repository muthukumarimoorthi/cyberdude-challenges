import JustValidate from "just-validate";

const registerFormEl = document.getElementById("registerForm");
const btnEl = document.getElementById("btn");
console.dir(btnEl);

// const handleSubmit = (event) => {
//     event.preventDefault(); // Prevent default behaviour

//     const formData = new FormData(registerFormEl);
//     const data = Object.fromEntries(formData);
//     console.log(data);

// }

// registerFormEl.addEventListener("submit", handleSubmit);

const validator = new JustValidate(registerFormEl);

validator.addField("#fullname", [{
    
}]);

validator.addField("#email", [
  {
    rule: "required",
    errorMessage: "Mail ID is required Ex: abithetchana@gmail.com",
  },
  {
    rule: "email",
  },
]);
validator.addField("#password", [
  {
    rule: "required",
    errorMessage: "Password is required",
  },
]);
validator.addField("#repeat-password", [
  {
    rule: "required",
    errorMessage: "Re-enter your password",
  },
  {
    validator: (value, fields) => {
      if (fields["#password"].elem) {
        const repeatPasswordValue = fields["#password"].elem.value;
        // console.log(fields['#password'].elem.value);
        return value === repeatPasswordValue;
      }
    },
    errorMessage: "Passwords should be the same",
  },
]);
