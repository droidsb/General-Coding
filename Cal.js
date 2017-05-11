var readline = require("readline-sync");

var age = readline.question("What is your age?(y) ");
var weight = readline.question("What is your weight?(lb) ");
var height = readline.question("What is your height?(ft) ");


var BMR = 10 * (Number(weight)*0.45359237) + 6.25 * (Number(height)*30.48) - 5 * Number(age) + 5;
var Cal=Math.floor(BMR);
while(Number(Cal)>0){
var CalInput = readline.question("Input Calories: ");
Cal=Cal-Number(CalInput);
console.log("You have "+Cal+" calories left.");

}
console.log("You have used up your calories!");

 