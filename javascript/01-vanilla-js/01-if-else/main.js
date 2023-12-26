// If Else Statement Task

const product = prompt("Please enter the product honey!!!");

[13,5,15,17,2,12,10,4]

const numbers = [13, 2, 12, 10, 5, 15, 4, 17];
const oddNumbers = [];
const evenNumbers = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    evenNumbers.push(numbers[i]);
  }
  else if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}
console.log("ODD:",oddNumbers);
console.log("Even", evenNumbers);
const result = [...oddNumbers, ...evenNumbers]
console.log(result);

