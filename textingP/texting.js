var fs = require('fs');
	var readline = require('readline-sync');

var SendOnce="start"
fs.writeFileSync('./U2M.js', "start");

while(true){
	var Rmessage = fs.readFileSync('./U2M.js', "utf8");

	
	var message = readline.question("User1: ");
	fs.writeFileSync('./U1M.js', message);
	
	if(Rmessage!=SendOnce){
	
	console.log("User2: "+Rmessage);
	
	SendOnce = Rmessage;
	
}

}