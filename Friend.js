var readline = require('readline-sync');

function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
console.log("Program Starting");
sleep(1000)
console.log("Be sure to use proper grammar or the program may not work");
console.log("");
sleep(3000);
var F1 = function(){
	console.log("Hello! My name is Cody! What's your name?");
	var FQ = readline.question("");
	sleep(500);
	console.log("What do you like to do in your free time?");
	var DoInFree = readline.question("");
	if(DoInFree==="Play video games"){
		console.log("Cool! I am assuming you have played Minecraft before?");
		console.log("(Yes/No)");
		var FQV = readline.question("");
			if(FQV==="Yes"){
				console.log("Do you like it?");
				var McLikeYN = readline.question("");
					if(McLikeYN==="Yes"){
						console.log("Yea, so do I! What servers have you played on recently?");
					}
			}
	}
}
var F2 = function(){
	console.log("Hello! My name is Cody! What's your name?");
	var FQ2 = readline.question("");
	sleep(500);
	console.log("What do you like to do in your free time?");
	var DoInFree2 = readline.question("");
	console.log("Cool! I like to "+DoInFree2+" too!");
	sleep(1000);
	console.log("What is your most favorite part about "+DoInFree2+"?");
}
F2();