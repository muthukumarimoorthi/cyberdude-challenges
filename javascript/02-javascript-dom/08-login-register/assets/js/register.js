// import JustValidate from "just-validate";

// const registerFormEl = document.getElementById("registerForm");
// const btnEl = document.getElementById("btn");
// const localKey = "personData";
// console.log(registerFormEl);

// const validator = new JustValidate(registerFormEl);
// console.log(validator);

// // const registerSectionEl = document.getElementById("registerSection");




// validator.addField("#fullName", [
//   {
//     rule: "required",
//     errorMessage: "Your name is required Ex: Abi Thetchana",
//   },
// ]);

// validator.addField("#email", [
//   {
//     rule: "required",
//     errorMessage: "Mail ID is required Ex: abithetchana@gmail.com",
//   },
//   {
//     rule: "email",
//   },
// ]);
// validator.addField("#password", [
//   {
//     rule: "required",
//     errorMessage: "Password is required",
//   },
// ]);
// validator.addField("#confirm-password", [
//   {
//     rule: "required",
//     errorMessage: "Re-enter your password",
//   },
//   {
//     validator: (value, fields) => {
//       if (fields["#password"].elem) {
//         const repeatPasswordValue = fields["#password"].elem.value;
//         // console.log(fields['#password'].elem.value);
//         return value === repeatPasswordValue;
//       }
//     },
//     errorMessage: "Passwords should be the same",
//   },
// ]);

// validator.addField("#terms", [
//   {
//     rule: "required",
//     errorMessage: "You need to accept the terms and conditions",
//   },
// ]);

// const API = "https://ipv4.icanhazip.com";
// const getIP = async () => {
//   const fetchURL = await fetch(API);
//   const bodyURL = await fetchURL.text();
//   return bodyURL;
// };

// const fetchData = await getIP();


//   export default validator.onSuccess(() => {
//   const formData = new FormData(registerFormEl);
//   formData.append("IP", fetchData);
//   const formValueObj = Object.fromEntries(formData.entries());
//   console.log(formValueObj);


//   const existingData = localStorage.getItem("personData");
//   const existingArray = JSON.parse(existingData);

//   const newData = [];

//   if (existingArray) {
//     existingArray.push(formValueObj);

//     localStorage.setItem(localKey, JSON.stringify(existingArray));
//   } else {
//     newData.push(formValueObj);

//     localStorage.setItem(localKey, JSON.stringify(newData));
//   }

//   alert("submitted successfully!");

//   registerFormEl.reset();
// });

// // const localStorage = localStorage.getItem("personData");

// const validation = new JustValidate("loginFormEl");
// console.log(validation);

// const localKey2 = "loginData";
// console.log(localKey);

// validation.addField("#email", [
//   {
//     rule: "required",
//     errorMessage: "Mail ID is required Ex: abithetchana@gmail.com",
//   },
//   {
//     rule: "email",
//   },
// ]);
// validation.addField("#password", [
//   {
//     rule: "required",
//     errorMessage: "Password is required",
//   },
// ]);

// validation.addField("#remember", [
//   {
//     rule: "required",
//   },
// ]);

// const API = "https://ipv4.icanhazip.com";
// const getIP = async () => {
//   const fetchURL = await fetch(API);
//   const bodyURL = await fetchURL.text();
//   return bodyURL;
// };

// const fetchData = await getIP();

// validation.onSuccess(() => {
//   const formData = new FormData(loginFormEl);
//   formData.append("IP", fetchData);
//   const formValueObj = Object.fromEntries(formData.entries());

//   console.log(formValueObj);

//   if (emailEl === "wefy@mailinator.com" && passwordEl === "Pa$$w0rd") {
//     console.log("Thank You");
//   } else {
//     console.log("Please Chech User Name and Password");
//   }

//   const existingData = localStorage.getItem("loginData");
//   const existingArray = JSON.parse(existingData);

//   const newData = [];

//   if (existingArray) {
//     existingArray.push(formValueObj);

//     localStorage.setItem(localKey, JSON.stringify(existingArray));
//   } else {
//     newData.push(formValueObj);

//     localStorage.setItem(localKey, JSON.stringify(newData));
//   }

//   alert("Login successfully!");

//   loginFormEl.reset();
// });



validator.addField("#email", [
  {
    rule: "required",
    errorMessage: "Mail ID is required Ex: abithetchana@gmail.com",
  },
]);

validator.addField("#password", [
  {
    rule: "required",
    errorMessage: "Password is required",
  },
  {
    rule: "password",
  },
]);

validator.addField("#remember", [
  {
    rule: "required",
    errorMessage: "Please select the field",
  },
]);

validator.onSuccess(() => {
  const emailEl = document.getElementById("email").value;
  const passwordEl = document.getElementById("password").value;

  const findUserData = localStorageValue.find((value) => {
    // console.log(value);
    return (
      value.registerEmail == emailEl && value.registerPassword == passwordEl
    );
  });

  const loginSectionHiddenDivEl = document.getElementById(
    "loginSectionHiddenDiv"
  );
  const noteSectionEl = document.getElementById("noteSection");
  if (findUserData) {
    loginSectionHiddenDivEl.classList.replace("block", "hidden");
    noteSectionEl.classList.replace("hidden", "block");
  } else {
    alert("Incorrect username and password! Please check your value!");
    loginFormEl.reset();
  }
});

const loginHereEl = document.getElementById("loginHere");
console.log(loginHereEl);
const registerNav = document.getElementById("registerSection");
const loginSectionHiddenEl = document.getElementById("loginSectionHidden");

loginHereEl.addEventListener("click", () => {
  loginSectionHiddenEl.classList.add("hidden", "block");
  registerNav.classList.add("hidden");
});

const signUpEl = document.getElementById("signUp");
console.log(signUpEl);

signUpEl.addEventListener("click", () => {
  loginSectionHiddenEl.classList.add("hidden");
  registerNav.classList.replace("hidden", "block");
});

const API = "https://ipv4.icanhazip.com";
const getIP = async () => {
  const fetchURL = await fetch(API);
  const bodyURL = await fetchURL.text();
  return bodyURL;
};

const fetchData = await getIP();
console.log(fetchData);

const ipSectionSpanEl = document.getElementById("ipSectionSpan");
const clickHereBtn = document.getElementById("clickHere")

clickHereBtn.addEventListener("click",()=>{
  ipSectionSpanEl.innerText = fetchData;
})
