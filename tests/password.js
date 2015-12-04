var readline = require('readline-sync');
var cipher = require('./cipher');
var decipher = require('./decipher');
var fs = require('fs');
var passfile = [];
var fileData = fs.readFileSync('./passwordsave.js', "utf8");
var password = fileData.split(" ");
console.log(password);

passfile.push(password);
//fs.readFileSync(file[, options])
var passwordsave = [];

var username = function() {
    var username = readline.question("Username: ");

    if (username === "droidsb") {
        console.log("YOU'RE DA BOSS! :D");

    }
    if (username === "jblueskull") {
        console.log("You're second in command");

    } else {
        console.log("You are signed in");

    }

//var dword = cipher.cipher("awesome")[/*scrambled word*/0];
//var dkey = cipher.cipher("awesome")[/*key*/1];




    //var password = readline.question("Password: ");
while(decipher.decipher([ 14, -7, 9, -18, 6, 3, 14 ],password[0]) !=password2test){
	var password2test = readline.question("Password: ");
    if (decipher.decipher([ 14, -7, 9, -18, 6, 3, 14 ],password[0])!=password2test) {
        console.log("Incorrect password. try again.")

    }
    
    if(decipher.decipher([ 14, -7, 9, -18, 6, 3, 14 ],password[0])===password2test){
	console.log("YUUUD");
}

	//console.log(password[0]);
	//console.log(decipher.decipher([ 14, -7, 9, -18, 6, 3, 14 ],password[0]));

    }
    
    
    //passwordsave.push(password2test);
    //passwordsave.push(cipher.cipher(password));
    //console.log(passwordsave);
    //passfile.push(passwordsave);
    fs.writeFileSync('./passwordsave.js', passfile);
};
username();

//fs.open('./passwordsave.js',JSON.parse([]));