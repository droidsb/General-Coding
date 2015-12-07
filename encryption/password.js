var readline = require('readline-sync');
var cipher = require('./cipher');
var decipher = require('./decipher');
var fs = require('fs');
var passfile = [];
var TempKeyHold = "";
var TempInfoHold = "";
var TempUserHold = "";

var fileData = fs.readFileSync('./passwordsave.js', "utf8");
var keyfiles = fs.readFileSync('./keys.js', "utf8");
var userfiles = fs.readFileSync('./users.js', "utf8");
var password =  JSON.parse(fileData);//fileData.split(" ");
var key = JSON.parse(keyfiles);
var user = JSON.parse(userfiles);

console.log(password);

passfile.push(password);
TempKeyHold=key;
TempUserHold=user;

//fs.readFileSync(file[, options])
var passwordsave = [];

var username = function() {
	var NewOROld = readline.question("new or old user? type either new or old");
if(NewOROld==="old"){
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
var person = TempUserHold.indexOf(username);
console.log("username id:"+TempUserHold.indexOf(username));
console.log(key[person]);
console.log(password[person]);
while(decipher.decipher(key[person],password[person]) !=password2test){
	var password2test = readline.question("Password: ", {
  hideEchoBack: true 
});
    if (decipher.decipher(key[person],password[person])!=password2test) {
        console.log("Incorrect password. try again.")
		
    }
    
    if(decipher.decipher(key[person],password[person])===password2test){
	console.log("YUUUD");
}

}
	//console.log(password[0]);
	//console.log(decipher.decipher(key[0],password[0]));

    }
if(NewOROld==="new"){
var usernameNew = readline.question("Username: ");
TempUserHold.push(usernameNew);

var passwordNew = readline.question("Password: ", {
  hideEchoBack: true 
});

TempInfoHold=cipher.cipher(passwordNew);
//console.log(TempInfoHold);
passwordsave.push(TempInfoHold[0]);
passfile.push(passwordsave);
TempKeyHold.push(TempInfoHold[1]);
console.log(TempKeyHold);

fs.writeFileSync('./keys.js', JSON.stringify(TempKeyHold));
fs.writeFileSync('./users.js', TempUserHold);
}
	//passwordsave.push(password2test);
    //passwordsave.push(cipher.cipher(password));
    //console.log(passwordsave);
    //passfile.push(passwordsave);
    
    
    fs.writeFileSync('./passwordsave.js', JSON.stringify(passfile));
};
username();

//fs.open('./passwordsave.js',JSON.parse([]));