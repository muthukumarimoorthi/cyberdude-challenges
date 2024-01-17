import JustValidate from "just-validate";

const registerFormEl = document.getElementById("registerForm");
const btnEl = document.getElementById("btn");
const localKey = "personData";

const validator = new JustValidate(registerFormEl);
// console.log(registerFormEl);

validator.addField("#fullName", [
  {
    rule: "required",
    errorMessage: "Your name is required Ex: Abi Thetchana",
  },
]);

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

validator.addField("#terms", [
  {
    rule: "required",
    errorMessage: "You need to accept the terms and conditions",
  },
]);

const API = "https://ipv4.icanhazip.com"
const getIP = async () => {
  const fetchURL = await fetch(API);
  const bodyURL = await fetchURL.text()
  return bodyURL;
}

const fetchData = await getIP()


validator.onSuccess(() => {
  const formData = new FormData(registerFormEl);
  formData.append("IP", fetchData);
  const formValueObj = Object.fromEntries(formData.entries());

  
  
  // const getIpAddress = async ()=> {
  //   try {
  //     const response = await fetch(API);
  //     if (response.ok) {
  //       const ipAddress = await response.text();
  //       console.log(ipAddress);
  //       formData.append("IP", JSON.stringify(ipAddress))
  //       // formData.append("IP", JSON.stringify(ipAddress));
  //     } else {
  //       console.log("COULDN'T GET YOUR IP.");
  //     }
  //   } catch (error) {
  //     console.error("An error occurred:", error);
  //   }
  // }

  // const edudaKambiya = await getIpAddress()
  
  // const localIP = await getIpAgetIpAddressddress()

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

  alert("submitted successfully!");

  registerFormEl.reset();
});
