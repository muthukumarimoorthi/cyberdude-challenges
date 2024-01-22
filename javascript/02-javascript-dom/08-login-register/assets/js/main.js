import JustValidate from "just-validate";

const registerFormEl = document.getElementById("registerForm");
const registerNav = document.getElementById("registerSection");
const loginFormEl = document.getElementById("loginForm");
const registerSectionEl = document.getElementById("registerSectionSpan");
const imgSectionEl = document.getElementById("imgSection");
const loginSectionHiddenDivEl = document.getElementById("loginSectionHidden");
const loginSectionHiddenSpanEl = document.getElementById(
  "loginSectionHiddenSpan"
);
const imgSectionSpanEl = document.getElementById("imgSectionSpan")
console.log(registerSectionEl);

registerSectionEl.addEventListener("click", () => {
  registerNav.classList.replace("hidden", "block");
  imgSectionEl.classList.add("hidden");
  loginSectionHiddenDivEl.classList.add("hidden");
  console.log("hi");
});

loginSectionHiddenSpanEl.addEventListener("click",()=>{
  imgSectionEl.classList.add("hidden");
  loginSectionHiddenDivEl.classList.replace("hidden", "block")
  registerNav.classList.add("hidden");
})

imgSectionSpanEl.addEventListener("click",()=>{
  imgSectionEl.classList.replace("hidden", "block");
  registerNav.classList.add("hidden");
  loginSectionHiddenDivEl.classList.add("hidden");
})
const validation = new JustValidate(registerFormEl);
const validator = new JustValidate(loginFormEl);

// console.log(validator);

// Localkay init
const localKey = "personData";

// Full name validation
validation.addField("#fullName", [
  {
    rule: "required",
    errorMessage: "Your name is required Ex: Abi Thetchana",
  },
  {
    rule: "minLength",
    value: 3,
  },
  {
    rule: "maxLength",
    value: 25,
  },
]);

// Email validation
validation.addField("#registerEmail", [
  {
    rule: "required",
    errorMessage: "Mail ID is required Ex: abithetchana@gmail.com",
  },
  {
    rule: "email",
  },
]);

// Password validation
validation.addField("#registerPassword", [
  {
    rule: "required",
    errorMessage: "Password is required",
  },
  {
    rule: "password",
  },
]);

// Repeat password validation
validation.addField("#confirm-password", [
  {
    rule: "required",
    errorMessage: "Please re-enter password",
  },
  {
    validator: (value, fields) => {
      if (fields["#registerPassword"] && fields["#registerPassword"].elem) {
        const repeatPasswordValue = fields["#registerPassword"].elem.value;

        return value === repeatPasswordValue;
      }

      return true;
    },
    errorMessage: "Passwords should be the same",
  },
]);

// Teams validation
validation.addField("#terms", [
  {
    rule: "required",
    errorMessage: "You need to accept the terms and conditions",
  },
]);

validation.onSuccess(() => {
  const formData = new FormData(registerFormEl);
  const formValueObj = Object.fromEntries(formData.entries());

  const existingData = localStorage.getItem("personData");
  const existingArray = JSON.parse(existingData);

  const newData = [];

  if (existingArray) {
    existingArray.push(formValueObj);

    localStorage.setItem(localKey, JSON.stringify(existingArray));
  } else {
    newData.push(formValueObj);

    localStorage.setItem(localKey, JSON.stringify(newData));
  }
  alert("Registered successfully!");

  registerFormEl.reset();
  registerNav.classList.add("hidden");
  imgSectionEl.classList.replace("hidden", "block");
});

const localStorageValue = JSON.parse(localStorage.getItem("personData"));
console.log(localStorageValue);

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

const API = "https://ipv4.icanhazip.com";
const getIP = async () => {
  const fetchURL = await fetch(API);
  const bodyURL = await fetchURL.text();
  return bodyURL;
};

const fetchData = await getIP();

validator.onSuccess(() => {
  const emailEl = document.getElementById("email").value;
  const passwordEl = document.getElementById("password").value;
  console.log(fetchData);

  const findUserData = localStorageValue.find((value) => {
    // console.log(value);
    return (
      value.registerEmail == emailEl && value.registerPassword == passwordEl
    );
  });

  const loginSectionHiddenDivEl = document.getElementById("loginSectionHidden");
  const noteSectionEl = document.getElementById("noteSection");
  const tableHeadOneEl = document.getElementById("tableHeadOne");
  const tableHeadTwoEl = document.getElementById("tableHeadTwo");
  const ipSectionSpanEl = document.getElementById("ipSectionSpan");

  const dateTime = new Date();
  if (findUserData) {
    // loginSectionHiddenDivEl.classList.replace("block", "hidden");
    // noteSectionEl.classList.replace("hidden", "block");
    ipSectionSpanEl.innerText = fetchData;
    tableHeadOneEl.innerText = `${emailEl}`;
    tableHeadTwoEl.innerText = `${dateTime}`;
    loginSectionHiddenDivEl.classList.add("hidden");
    registerNav.classList.add("hidden");
    noteSectionEl.classList.replace("hidden", "block")
  } else {
    alert("Incorrect username and password! Please check your value!");
    loginFormEl.reset();
  }
});

// const loginHereEl = document.getElementById("loginHere");
// // console.log(loginHereEl);

// const loginSectionHiddenEl = document.getElementById("loginSectionHidden");

// loginHereEl.addEventListener("click", () => {
//   loginSectionHiddenEl.classList.add("hidden", "block");
//   registerNav.classList.add("hidden");
// });

// const signUpEl = document.getElementById("signUp");
// // console.log(signUpEl);

// signUpEl.addEventListener("click", () => {
//   loginSectionHiddenEl.classList.add("hidden");
//   registerNav.classList.replace("hidden", "block");
// });
