
const amount = prompt("Enter your amount", "Ex:10000");

switch(true){
    case amount >= 60000:
        console.log("Buy IPhone Mobile");
        break;
    case amount >= 10000 && amount < 60000:
        console.log("Buy Android Mobile");
        break;
    case amount >= 5000 && amount <= 10000:
        console.log("Buy Basic Mobile");
        break;
    default :
        console.log("You can't affort mobile phone now");
}