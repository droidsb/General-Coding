
/**************************************************************************************/

// module prefix
var player = function(){};

/**************************************************************************************/
player.prototype.PlayerChoice = function(CHV) {
	if(CHV===21){
		return "won";
	}
	if(CHV<18){
		return "hit";
	}
	return "stay";
}

/**************************************************************************************/
// module suffix
module.exports = new player();

/**************************************************************************************/