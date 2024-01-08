import months from "../data/main.json";

const monthListEl = document.querySelector("#monthsList");
const januaryEl = document.querySelector("#january")
console.log(januaryEl);

months.forEach((month) => {
  monthListEl.innerHTML += `<div class="li-month"> 
  <div class="div-flex"><p class="month-list">Month:<p class="month-name">${month.month}</p></p> </div>
  <div class="div-flex"><p class="month-list">Number of Days:<p class="month-name">${month.totaldays}</p></p> </div>
  <div class="div-flex"><p class="month-list">Days: </p></div>
  <div class="days"><p class="month-name">Sunday<p class="month-name">${month.days.sundays}</p></p></div>
  <div class="days"><p class="month-name">Monday<p class="month-name">${month.days.monday}</p></p></div>
  <div class="days"><p class="month-name">Tuesday<p class="month-name">${month.days.tuesday}</p></p></div>
  <div class="days"><p class="month-name">Wednesday<p class="month-name">${month.days.wednesday}</p></p></div>
  <div class="days"><p class="month-name">Thursday<p class="month-name">${month.days.thursday}</p></p></div>
  <div class="days"><p class="month-name">Friday<p class="month-name">${month.days.friday}</p></p></div>
  <div class="days"><p class="month-name">Saturday<p class="month-name">${month.days.saturday}</p></p></div>
  <div class="div-flex"><p class="month-list">Holiday<p class="month-name">${month.holidayDate.join(", ")}</p></p> </div>
  </div>
  `;
});
