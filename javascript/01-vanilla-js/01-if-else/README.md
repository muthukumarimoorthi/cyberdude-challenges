# If-Else (Javascript Challenge)
This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> **Task #1** : Create a if-else condition with all possible conditions


```js
// My If/Else Challenge Code Has Been Deployed Here. 

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
```

### Live link -> 
Deploy it and put the link here.


## Acknowledgement:
 - [@Anbuselvan Rocky](https://github.com/anburocky3) | GitHub Profile.

## References:

[![If-Else-Conditional Statement](http://img.youtube.com/vi/WebG_D9-U80/0.jpg)](http://www.youtube.com/watch?v=WebG_D9-U80 "If-Else Conditional Statement")