
/**************************************************************************************/

// module prefix
var player = function(){};

/**************************************************************************************/
player.prototype.PlayerChoice = function(CHV) {
	if(CHV===21){
		return "won";
	}
	return "hit";
}
/**************************************************************************************/
// module suffix
module.exports = new player();

/**************************************************************************************/