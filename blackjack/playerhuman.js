var readline = require('readline-sync');
/**************************************************************************************/

// module prefix
var player = function(){};

/**************************************************************************************/
player.prototype.PlayerChoice = function(CHV) {
	var hitORstay = readline.question("press h to hit or s to stay ");
	if(hitORstay==="h"){
		return "hit";
	}
	
	return "stay";
}

/**************************************************************************************/
// module suffix
module.exports = new player();

/**************************************************************************************/