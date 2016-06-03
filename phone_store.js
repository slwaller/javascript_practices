var bal = getBalance();
var phone_amount = phoneSelector();
var phone_price = 90.99;
var tax_rate = 0.08;
var acc_price = 10.99
var spent = 0

// function calculateTax(){
//   return spent * tax_rate;
// }

function getBalance() {
  var bal = prompt("How much you got in the bank?");
  bal = Number(bal);
  return bal;
}

function formatPrice(spent){
  return "$" + spent.toFixed(2);
}

function phoneSelector() {
  var selected = prompt("Phones are 90$ each, how many phones do you want?")
  return selected;
}

function buyAcc(){
  if (spent < bal){
    spent = spent + acc_price;
    console.log(spent);
  }
}
//  I want to start with b and subtract 90 however many times phoneSelector dictates
function banktophoneLoop(){
  if (bal >= phone_price * phone_amount){
    console.log("Thanks for your purchase!");
  }
  else{
    console.log("You don't have enough money!");
  }
}

for (spent = 0; spent < bal; spent = (spent + phone_price) * phone_amount){
  console.log("Your purchase: " + formatPrice(spent));
}

// spent = spent + calculateTax(spent);




console.log(bal);
console.log(phone_amount);
// console.log(phone_price);

banktophoneLoop();