var fs = require('fs');
	var readline = require('readline-sync');

var SendOnce="start"
fs.writeFileSync('./U1M.js', "start");

while(true){
	fs.readFileSync('./U1M.js', "utf8");
		var Rmessage = fs.readFileSync('./U1M.js', "utf8");

	
	//var message = readline.question("User2: ");
	//fs.writeFileSync('./U2M.js', "message");
	
	
	if(Rmessage!=SendOnce){
	
	console.log("User1: "+Rmessage);
	
	SendOnce = Rmessage;
	
}



}