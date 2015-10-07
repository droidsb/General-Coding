var readline = require("readline-sync");
var x=10;
var MyRN = Math.ceil(Math.random() * 100);

var guess1 = readline.question("Guess the number I am thinking of from 1-100 ");
var guessNum = Number(guess1)
if(guessNum === MyRN){
console.log("CORRECT! The number was "+MyRN);
}

if(guessNum != MyRN){
console.log("Incorrect");
guessmain();
}

function guessmain(){
	var guessmainvar = readline.question("try again ");
	var guessNum = Number(guessmainvar)
	if(x===0){
	console.log("You ran out of guesses!");
	setTimeout(function(){}, 1000);
	console.log("Quitting game...");
	setTimeout(function(){}, 2000);
	return;
	}
	if(guessmainvar === 'q'){
		console.log("Quitting game...");
		setTimeout(function(){}, 2000);
	}
	else if(guessNum === MyRN){
		console.log("CORRECT! The number was "+MyRN);
		
	}
	else if(guessNum > MyRN){
		console.log("Incorrect");
		console.log("Your answer is too high");
		x=x-1;
		console.log(x+" guesses left");
		guessmain();
	}
	else if(guessNum < MyRN){
		console.log("Incorrect");
		console.log("Your answer is too low");
		x=x-1;
		console.log(x+" guesses left");
		guessmain();
	
	}
	
	
	
}

