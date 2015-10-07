
var readline = require("readline-sync");

var answer = readline.question("What's your name? ");

console.log("I knew that, "+ answer + "!");


var count = readline.question("Give me a number: ");
 
for (var i = 0; i < count; i = i +1){
	console.log(i+1);
}