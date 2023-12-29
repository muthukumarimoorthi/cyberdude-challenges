// ! Importing File

import JustValidate from "just-validate";

const formEl = document.getElementById("applicationForm"); // * Get form elements by ID

const validateForm = new JustValidate(formEl);
console.log(validateForm);

const localKey = "personData";

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
  [{ rule: "required", errorMessage: "Date of birth is required" }],
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
    {
      rule: "required",
      errorMessage: "Aadhar number is required Ex: 1234 5698 7321",
    },
    { rule: "number" },
    { rule: "minLength", value: 12 },
    { rule: "maxLength", value: 12 },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
// * Type of employment validation
validateForm.addField(
  "#typeOfEmployment",
  [
    {
      rule: "required",
      errorMessage: "Please select your employment type, as required",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
// * Loan of purpose validation
validateForm.addField(
  "#loanPurpose",
  [
    {
      rule: "required",
      errorMessage: "Please select your loan purpose, as required",
    },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
// * Monthly income validation
validateForm.addField(
  "#monthlyIncome",
  [
    { rule: "required", errorMessage: "Your monthly income, is required" },
    { rule: "number" },
    { rule: "minLength", value: 5 },
    { rule: "maxLength", value: 7 },
  ],
  {
    errorLabelCssClass: ["form-error"],
  }
);
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
// ! Validation End

// * Get form datas in formdata object
validateForm.onSuccess(() => {
  const formData = new FormData(formEl);
  const formValueObj = Object.fromEntries(formData.entries());

  const existingData = localStorage.getItem("personData");
  const existingArray = JSON.parse(existingData);
  //   console.log(existingArray);

  const newData = [];

  if (existingArray) {
    existingArray.push(formValueObj);

    localStorage.setItem(localKey, JSON.stringify(existingArray));
  } else {
    newData.push(formValueObj);

    localStorage.setItem(localKey, JSON.stringify(newData));
  }

  alert("Your loan application submitted successfully!");
  getAllPersonsDatas();
  formEl.reset();
});

function getAllPersonsDatas() {
  const personData = localStorage.getItem(localKey);

  const personDataArr = JSON.parse(personData);

  const personCardEl = document.querySelector("#approvalRequest");
  console.log(personCardEl);

  if (personDataArr && personDataArr.length > 0) {
    personCardEl.classList.remove("hidden");

    const tableEl = document.querySelector("#personDataTable");
    tableEl.innerHTML = "";

    const newFinalValue = [];

    personDataArr.map((personData) => {
      const trEl = document.createElement("tr");
      const tdNameEl = document.createElement("td");
      const tdMobileEl = document.createElement("td");
      const tdEmailEl = document.createElement("td");
      const tdAddressEl = document.createElement("td");
      const tdDOBEl = document.createElement("td");
      const tdMaritalStatusEl = document.createElement("td");
      const tdAadharEl = document.createElement("td");
      const tdEmploymentEl = document.createElement("td");
      const tdLoanPurposeEl = document.createElement("td");
      const tdIncomeEl = document.createElement("td");
      const tdOngoingLoanEl = document.createElement("td");
      const approvalSectionEl = document.createElement("td");
      const approvalBtnEl = document.createElement("button");

      tdNameEl.classList.add("px-2", "font-thin", "border", "border-gray-200");
      tdNameEl.textContent = personData.fullName;

      tdMobileEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdMobileEl.textContent = personData.mobileNumber;

      tdEmailEl.classList.add("px-2", "font-thin", "border", "border-gray-200");
      tdEmailEl.textContent = personData.email;

      tdAddressEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdAddressEl.textContent = personData.address;

      tdDOBEl.classList.add("px-2", "font-thin", "border", "border-gray-200");
      tdDOBEl.textContent = personData.dOB;

      tdMaritalStatusEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdMaritalStatusEl.textContent = personData.maritalStatus;

      tdAadharEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdAadharEl.textContent = personData.aadharCardNumber;

      tdEmploymentEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdEmploymentEl.textContent = personData.typeOfEmployment;

      tdLoanPurposeEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdLoanPurposeEl.textContent = personData.loanPurpose;

      tdIncomeEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdIncomeEl.textContent = personData.monthlyIncome;

      tdOngoingLoanEl.classList.add(
        "p-2",
        "font-thin",
        "border",
        "border-gray-200"
      );
      tdOngoingLoanEl.textContent = personData.ongoingLoan;
      
      // approvalSectionEl.classList.add(
      //   "p-2",
      //   "font-thin",
      //   "border",
      //   "border-red-200"
      // );

      
      

      approvalBtnEl.className =
        "px-2 py-1 rounded-md bg-red-600 hover:bg-red-700 text-white text-xs";
      approvalBtnEl.textContent = "Approval";

      approvalBtnEl.addEventListener("click", (e) => {
        approvalRequest(personData);
      });

      approvalSectionEl.classList.add("px-2", "py-1", "border");
      approvalSectionEl.append(approvalBtnEl);

      trEl.append(
        tdNameEl,
        tdMobileEl,
        tdEmailEl,
        tdAddressEl,
        tdDOBEl,
        tdMaritalStatusEl,
        tdAadharEl,
        tdEmploymentEl,
        tdLoanPurposeEl,
        tdIncomeEl,
        tdOngoingLoanEl,
        approvalSectionEl
      );

      newFinalValue.push(trEl);
      console.log(trEl);
    });
    newFinalValue.forEach((el) => tableEl.append(el));
  }
}

function approvalRequest(personDataTable) {
  const confirmation = confirm(
    `Do you want to approval '${personDataTable["fullName"]}' loan request?`
  );

  if (confirmation) {
    const existingData = localStorage.getItem(localKey);

    const personDataObj = JSON.parse(existingData);

    const otherRecords = personDataObj.filter(
      (approvalReq) =>
        approvalReq.aadharCardNumber != personDataTable["aadharCardNumber"]
    );

    localStorage.setItem(localKey, JSON.stringify(otherRecords));

    getAllPersonsDatas();
  }
}

getAllPersonsDatas();
