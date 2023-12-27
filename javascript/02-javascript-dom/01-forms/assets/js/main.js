// Getting forms value using element name

const registerEl = document.forms.register;
const elementsEl = registerEl.elements.fullName;
const mobileNumberEl = registerEl.elements.mobileNumber;

const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default behaviour

  const formData = new FormData(registerEl);
  const data = Object.fromEntries(formData);
  console.log(data);

  // Name Validation
  if (elementsEl.value.length > 2 && elementsEl.value.length <= 22) {
    console.log(`Nice Name`);
  } else {
    alert("Please enter your correct name!!!");
  }
  // Mobile No Validation
  // 10 digits mobile no

  if (mobileNumberEl.value.length < 10 || mobileNumberEl.value.length > 10) {
    alert("Please enter your correct number!!! ");
  } else {
    confirm(`We will send all updates in your phone`);
  }
  // Output
  (function () {
    const customerInput = `
      Customer Name : ${data.fullName}
      DOB           : ${data.date} ${data.month} ${data.year}
      Email ID      : ${data.email}
      Mobile No     : ${data.mobileNumber}
      Package       : ${data.packageMonths}
      Disability    : ${data.yesOrNoRadio} 
    `;
    console.log(customerInput);
  })();
  // Final confirm box
  confirm(`Thank you ${data.fullName} for choosing us`) 
};
// Invoked Function
registerEl.addEventListener("submit", handleSubmit);

// *
// !
// 