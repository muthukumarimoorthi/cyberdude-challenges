// Creating Array in Primitive Method

const monthlyNeeds = ["Shampoo", "Pears Soap", "Liquid Detergent", "Napkin"];

// UPDATE & ADD & READ

monthlyNeeds.push("Snacks");
monthlyNeeds.unshift("Body Wash");
monthlyNeeds.splice(2, 0, "Hair Oil");
const monthlyFind = monthlyNeeds.find(function(value){
  console.log(value);
})
console.log(monthlyFind);
const price = [1, 2, 3, 4, 5];
console.log(price.find((number)=>number > 2));

console.log(monthlyNeeds);

//DELETE

monthlyNeeds.pop();
monthlyNeeds.shift();
monthlyNeeds.splice(1, 1);
console.log(monthlyNeeds);

/*============================*/

// Creating Array in Reference Method

let monthlyExpenses = [
        {id: 1, myNeed: "Hostel Rent", amount: 6500 },
        {id: 2, myNeed: "Utilities", amount: 500 },
        {id: 3, myNeed: "Snacks", amount: 1000 },
        {id: 4, myNeed: "Internet", amount: 239 },
        {id: 5, myNeed: "Travel Expense", amount: 500 }
      ];

// ADD, UPDATE, READ

function addItemToExpenses(id, myNeed, amount) {
    monthlyExpenses.push({ id, myNeed, amount });
  console.log(`${myNeed} added to your monthly expenses`);
}
addItemToExpenses(6, "Shopping", 1500);

const totalExpenses = monthlyExpenses.reduce(function(accumulator, currenVal){
  console.log(accumulator);  
    return accumulator + currenVal.amount;
    
},0);
console.log(`Your monthly expenses total is ₹ ${totalExpenses}`);

//DELETE

function deleteExpense(myNeed) {
    const deleteItem = monthlyExpenses.findIndex(function(value) {
      // console.log(value.myNeed);
      return value.myNeed === myNeed;
    });
  
    if (deleteItem !== -1) {
      monthlyExpenses.splice(deleteItem, 1);
      console.log(`${myNeed} deleted successfully.`);
    } else {
      console.log(`${myNeed} not found`);
    }
  }
  deleteExpense("apple");

  console.log(monthlyExpenses);

  /* ========================== */


// const totalExpenses = monthlyExpenses.reduce(function(val1, val2){
//       console.log(val1);
//       console.log(val2); 
//   return val1 + val2.amount;  
// });
// console.log(totalExpenses);
// let ab = "ab";
// let cd = "de";
// console.log(ab+cd);