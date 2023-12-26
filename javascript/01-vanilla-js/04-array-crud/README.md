# Array (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #4** : Create an Array About My Wish with both Primitive and Reference Method, and You Should Manipulate the Array as well (Create, Read, Update, Delete).
> 
>  

```js

// Array Task

// Primitive

const monthlyNeeds = ["Shampoo", "Pears Soap", "Liquid Detergent", "Napkin"];

// // UPDATE & ADD & READ

monthlyNeeds.push("Snacks");
monthlyNeeds.unshift("Body Wash");
console.log(monthlyNeeds);

// // DELETE

monthlyNeeds.pop();
monthlyNeeds.shift();
console.log(monthlyNeeds);

/*============================*/

// Reference

let monthlyExpenses = [
  { id: 1, myNeed: "Hostel Rent", amount: 6500 },
  { id: 2, myNeed: "Utilities", amount: 500 },
  { id: 3, myNeed: "Snacks", amount: 1000 },
  { id: 4, myNeed: "Internet", amount: 239 },
  { id: 5, myNeed: "Travel", amount: 500 }
];

// ADD, UPDATE, READ

function addItemToCart(id, myNeed, amount) {
  monthlyExpenses.push({ id, myNeed, amount });
  console.log(`${myNeed} added to my monthly expenses`);
}
const newItem = addItemToCart(6, "Shopping", 1500);

const totalExpenses = monthlyExpenses.reduce(function (accumulator, currenVal) {
  return accumulator + currenVal.amount;
  console.log(accumulator + currenVal.amount);  
}, 0);
console.log(totalExpenses);

//DELETE

function deleteExpense(myNeed) {
  const deleteItem = monthlyExpenses.findIndex(function (value) {
    return value.myNeed === myNeed;
  });

  if (deleteItem !== -1) {
    monthlyExpenses.splice(deleteItem, 1);
    console.log(`${myNeed} deleted successfully.`);
  } else {
    console.log(`${myNeed} not found`);
  }
}
const itemDelete = deleteExpense("Shopping");
console.log(monthlyExpenses);

```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
- [Anbuselvan Rocky](https://github.com/anburocky3) | GitHub Profile.
- [@Shajid Shafee](https://github.com/mshajid) | GitHub Profile.
- [@Yogha Raj Dhayal](https://github.com/yrd369) | GitHub Profile.
 

## References:

[![Array](http://img.youtube.com/vi/OuUqS8Po5ps/0.jpg)](http://www.youtube.com/watch?v=OuUqS8Po5ps "Array")

- I should give a big thanks to this [CyberDude JavaScript Playlist](https://www.youtube.com/playlist?list=PL73Obo20O_7ihsIM5K-hHYPrcqkkdQcLa). Without this, I don't think I could write thise above whole code by myself. 