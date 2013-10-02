

var name = prompt("What is your name?");
var balance = prompt("What is your balance?");
  
  balance = parseFloat(balance);
  var dep1 = prompt("What is the amount of your first balance?");
  var dep2 = prompt("What is the amount of your second balance?");
  var dep3 = prompt("What is the amount of your third balance?");
  var with1 = prompt("What is the amount of your first balance?");
  var with2 = prompt("What is the amount of your second balance?")
  var with3 = prompt("What is the amount of your third balance?");

  dep1 = parseFloat(dep1);
  dep2 = parseFloat(dep2);
  dep3 = parseFloat(dep3);
  with1 = parseFloat(with1);
  with2 = parseFloat(with2);
  with3 = parseFloat(with3);

  var deposits = 0;

  deposits += dep1;
  deposits += dep2;
  deposits += dep3;

  var withdraws = 0;

  withdraws += with1;
  withdraws += with2;
  withdraws += with3;

balance += (deposits - withdraws)

balance = (balance < 0) ? 50 : 0

console.log('Your balance is: ' + balance);



