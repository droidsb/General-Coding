var readline = require('readline-sync');
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}


var load = function(time){
	var x=1;

	while(x<102){
		console.log(x-1+"%") 
		sleep(Math.random() * time);
		x++;
	
	}
	
	
	
}

var YIP = readline.question("Your Ip: ");
var TIP = readline.question("Target Ip: ");
//var Code = readline.question("Code: ");
console.log("Connecting to target...");
sleep(Math.random() * 5000);
console.log("Disabling Firewall...");
sleep(Math.random() * 5000);
console.log("Overriding system...");
sleep(Math.random() * 5000);
console.log("Complete, please type code below");
var Code = readline.question("");
console.log("Applying code...");
sleep(Math.random() * 1000);
console.log("Hacking user password");
sleep(Math.random() * 500);
console.log("Password Hacked");
sleep(Math.random() * 500);
console.log("Changing Password");
sleep(Math.random() * 500);
console.log("Downloading Personal Files");
sleep(Math.random() * 500);
console.log("Downloading files marked important");
sleep(Math.random() * 500);
console.log("Deleting Personal Files");
load(50);
sleep(Math.random() * 500);
console.log("Deleting Important Files");
load(1000);


