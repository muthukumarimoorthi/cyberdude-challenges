// ! Importing File

import JustValidate from "just-validate";

const formEl = document.getElementById("applicationForm"); // * Get form elements by ID

const validateForm = new JustValidate(formEl);
console.log(validateForm);

// * Name Validation
validateForm.addField(
  "#fullName",
  [
    { rule: "required", errorMessage: "Name is required Ex: Abi Thetchana" },
    { rule: "minLength", value: 3 },
    { rule: "maxLength", value: 20 },
  ],
  { errorLabelCssClass: ["form-error"] }
);
// * Mobile number validation
validateForm.addField(
  "#mobileNumber",
  [
    {
      rule: "required",
      errorMessage: "Mobile number is required Ex: 9876456321",
    },
    { rule: "number" },
    { rule: "minLength", value: 10 },
    { rule: "maxLength", value: 10 },
  ],
  { errorLabelCssClass: ["form-error"] }
);
//  * Email validation
validateForm.addField(
  "#email",
  [
    {
      rule: "required",
      errorMessage: "Mail ID is required Ex: abithetchana@gmail.com",
    },
    { rule: "email" },
  ],
  { errorLabelCssClass: ["form-error"] }
);
// * Address validation
validateForm.addField(
  "#address",
  [
    { rule: "required", errorMessage: "Address is required" },
    { rule: "minLength", value: 10 },
    { rule: "maxLength", value: 50 },
  ],
  { errorLabelCssClass: ["form-error"] }
);
// * Date validation
validateForm.addField(
  "#dOB",
  [
    { rule: "required", errorMessage: "Date of birth is required" },
    { rule: "number" },
  ],
  { errorLabelCssClass: ["form-error"] }
);
// * Marital status validation
validateForm.addField(
  "#maritalStatus",
  [
    {
      rule: "required",
      errorMessage: "Please select your marital status, as required",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
// * Aadhar card number validation
validateForm.addField(
  "#aadharCardNumber",
  [
    { rule: "required", errorMessage: "Aadhar number is required Ex: 1234 5698 7321" },
    { rule: "number" },
    { rule: "minLength", value: 12 },
    { rule: "maxLength", value: 12 },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
// * Type of employment validation
validateForm.addField("#typeOfEmployment", [{ rule: "required",  errorMessage: "Please select your employment type, as required"}], {
  errorLabelCssClass: ["form-error"],
});
// * Loan of purpose validation
validateForm.addField("#loanPurpose", [{ rule: "required", errorMessage: "Please select your loan purpose, as required" }], {
  errorLabelCssClass: ["form-error"],
});
// * Monthly income validation
validateForm.addField("#monthlyIncome", [{ rule: "required", errorMessage: "Your monthly income, is required" }, 
{rule:"number"},
{rule:"minLength", value: 4},
{rule:"maxLength", value:7}], {
  errorLabelCssClass: ["form-error"],
});
// * Ongoing loan validation
validateForm.addField("#ongoingLoan", [{ rule: "required" }], {
  errorLabelCssClass: ["form-error"],
});
// * Checkbox validation
validateForm.addField(
    "#checkBox",
    [
      {
        rule: "required",
        errorMessage: "You need to accept the terms and conditions",
      },
    ],
    {
      errorLabelCssClass: ["form-error"],
    }
  );