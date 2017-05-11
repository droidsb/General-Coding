var fs = require('fs');
var run = true;
var readline = require('readline-sync');
var waitTime=0;
function sleep(miliseconds) {
   var currentTime = new Date().getTime();

   while (currentTime + miliseconds >= new Date().getTime()) {
   }
}
sleep(500);
process.stdout.write("Connecting");
sleep(300);
process.stdout.write(".");
sleep(200);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(400);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(100);
process.stdout.write(".");
console.log();
sleep(100);
var password = readline.question("Password: ");

if(password==="1"){//42598071684382


	console.log("Access Granted");
while(run===true){
	var code = readline.question("Enter Command: ");
	
	if(code==="object.create(uzi);" || code==="object.create(Uzi);"){
		console.log("Successfully created Uzi");
	}
	
	if (code==="object"){

		var code2 = readline.question("create/remove: ");

		if(code2==="create"){
		var code3 = readline.question("object: ");
			console.log("Entering code to create "+code3+"...");
			fs.writeFileSync('./objectsC.js', code3);
		}
		
		if(code2==="remove"){
		var code3 = readline.question("Object: ");
			console.log("Entering code to remove "+code3+"...");
			fs.writeFileSync('./objectsR.js', code3);
		}
	}
	
	if (code==="universe"){
		
		var code2 = readline.question("change/destroy: ");
		
		if(code2==="change"){
			var code3 = readline.question("Enter universe to change to: ");
			console.log("Entering code to change to the "+code3+" universe...");
			fs.writeFileSync('./universeC.js', code3);
			
		
		}
		
		if(code2==="destroy"){
			var code3 = readline.question("Enter universe to destroy to: ");
			console.log("Entering code to destroy the "+code3+" universe...");
			fs.writeFileSync('./universeR.js', code3);
			
		
		}
		
	
	}


if(code==="shut down"){
process.stdout.write("Shutting Down");
sleep(300);
process.stdout.write(".");
sleep(200);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(400);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(100);
process.stdout.write(".");
console.log();
sleep(100);

run=false;
}

if(code==="shut down matrix"){
fs.writeFileSync('./matrixRun.js', "shutdown");
process.stdout.write("Shutting Down");
sleep(300);
process.stdout.write(".");
sleep(200);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(400);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(100);
process.stdout.write(".");
console.log();
sleep(100);

run=false;
}

}



}

else {

console.log("INCORRECT PASSWORD");
sleep(500);
process.stdout.write("Shutting Down");
sleep(300);
process.stdout.write(".");
sleep(200);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(400);
process.stdout.write(".");
sleep(300);
process.stdout.write(".");
sleep(100);
process.stdout.write(".");
console.log();
sleep(100);



}

