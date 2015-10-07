var readline = require("readline-sync");

var MyRN = Math.ceil(Math.random() * 100);
console.log(MyRN);
var guess1 = readline.question("Guess the number I am thinking of from 1-100 ");

if(guess1 === MyRN){
console.log("CORRECT! The number was "+MyRN);
}

/*if(guess1 != RN){
console.log("Incorrect");
guessmain();
}
function guessmain(){
	if(guess != RN){
		console.log("Incorrect");
		var guess = readline.question("try again ");
	}
	if(guess === RN){
		console.log("CORRECT! The number was "+RN);
	
	}
}*/