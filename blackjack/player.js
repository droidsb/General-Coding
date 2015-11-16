/**************************************************************************************/

// module prefix
var player = function(){};

/**************************************************************************************/
player.prototype.PlayerChoice = function() {
var readline = require("readline-sync");
var H_S = readline.question("To hit press 'h' to stay press 's' ");
var hit=false;
var stay=false;
if(H_S==="h"){
	hit=true;
}

if(H_S==="s"){
	stay=true;
}

if(hit===true){
	console.log("You got a card!");
}

if(stay===true){
	console.log("Awwww... You didn't get a card, how boring");
}





}

/**************************************************************************************/
// module suffix
module.exports = new player();

/**************************************************************************************/