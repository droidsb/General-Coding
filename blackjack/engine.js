/**************************************************************************************/

// module prefix
var engine = function(){};

/**************************************************************************************/
// module variables
var _deck = [];

/**************************************************************************************/
// private routines

/**************************************************************************************/
var moolah = require('./moolahMod');

moolah.init();
function _shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};


var _topCard = function(array){
	return array.pop();
}


var _newHand = function(array){
	var result = [];
	
	result.push(_topCard(array));
	result.push(_topCard(array));
	
	return result;
};	

var _prettyCard = function (card){
var result = '';

switch (card % 13){
case 0:
	result += "Ace"
	break;
case 10:
	result += "Jack"
	break;
case 11:
	result += "Queen"
	break;
case 12:
	result += "King"
	break;
default:
	result += (card % 13 + 1);
	break;
}

result += " of ";
	
	switch (card % 4){
		case 0:
			result += "Diamonds"
			break;
		case 1:
			result += "Clubs"
			break;
		case 2:
			result += "Spades"
			break;
		case 3:
			result += "Hearts"
			break;
	}
	return result;
};

var _prettyHand = function (array) {
	var result = [];
	
	for(var i = 0; i<array.length; i++){
	 result.push(_prettyCard(array[i]));
	}
	return result;
}
/**************************************************************************************/
// pubic routines

/**************************************************************************************/
engine.prototype.init = function(){
	


	for(var i=0; i <52; i++){
		_deck.push(i);
	}
	
	_shuffleArray(_deck);
	
	
	
	var p1h = _newHand(_deck);
	var p2h = _newHand(_deck);
	console.log(p1h);
	console.log(p2h);
	console.log(_prettyHand(p1h));
	console.log(_prettyHand(p2h));
};

/**************************************************************************************/
// module suffix
module.exports = new engine();

/**************************************************************************************/