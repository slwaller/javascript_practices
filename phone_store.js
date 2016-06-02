var bal = getBalance();
var phone_amount = phoneSelector();
var phone_price = 90;

function getBalance() {
  var bal = prompt("How much you got in the bank?");
  bal = Number(bal);
  return bal;
}

function phoneSelector() {
  var selected = prompt("Phones are 90$ each, how many phones do you want?")
  return selected;
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

console.log(bal);
console.log(phone_amount);
console.log(phone_price);
banktophoneLoop();