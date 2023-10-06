//! JS TASK 
// ? CHAPTERS 26 to 30
// *Q.1
var num = +prompt("Enter any positve integer");
var originalNum = num;
var roundOffValue = Math.round(num);
var floorValue = Math.floor(num);
var ceilValue = Math.ceil(num);
document.write("Original Number: " + originalNum + "<br>");
document.write("Round Off Value: " + roundOffValue + "<br>");
document.write("Floor Value: " + floorValue + "<br>");
document.write("Ceil Value: " + ceilValue + "<br><br><br>");
// *Q.2
var num = +prompt("Enter any negative floating point number");
var originalNum = num;
var roundOffValue = Math.round(num);
var floorValue = Math.floor(num);
var ceilValue = Math.ceil(num);
document.write("Original Number: " + originalNum + "<br>");
document.write("Round Off Value: " + roundOffValue + "<br>");
document.write("Floor Value: " + floorValue + "<br>");
document.write("Ceil Value: " + ceilValue + "<br><br><br>");
// *Q.3
var num = +prompt("Enter any number");
var result = Math.abs(num);
document.write("The absolute value of " + num + " is " + result + "<br><br>");
// *Q.4
var dice = Math.random();
var result = dice * 6;
var finalResult = Math.round(result);
document.write("Dice Roll Result: " + finalResult + "<br><br>");
// *Q.5
var coin = Math.random();
var result = coin * 2;
var finalResult = Math.ceil(result);
document.write("Random coin value: " + finalResult + "<br><br>");
// *Q.6
var num = Math.random();
var result = num * 100;
var finalResult = Math.floor(result);
document.write("Random number between 1 and 100: " + finalResult + "<br><br>");
// *Q.7
var num = +prompt("Enter your weight");
var result = parseFloat(num);
document.write("The weight of the user is " + result + "kilograms");
// *Q.8
const secretNumber = Math.floor(Math.random() * 10) + 1;
const userNumber = prompt("Enter a number between 1 and 10:");
if (parseInt(userNumber) === secretNumber) {
    console.log("Congratulations! You guessed the correct number!");
} else {
    console.log(`Sorry, the correct number was ${secretNumber}. Better luck next time!`);
}



