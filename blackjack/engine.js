/**************************************************************************************/

// module prefix
var engine = function(){};

/**************************************************************************************/
// module variables
var _deck = [];
var _HandArray = [];
var _PlayerCount = 0;
var _CurrentPlayer = 0;

/**************************************************************************************/
// private routines

/**************************************************************************************/
function sleep(miliseconds) {
           var currentTime = new Date().getTime();

           while (currentTime + miliseconds >= new Date().getTime()) {
           }
       }
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
	return result.join(", ");
}
/**************************************************************************************/
// pubic routines

/**************************************************************************************/
engine.prototype.init = function(PlayerAmount){
	


	for(var i=0; i <52; i++){
		_deck.push(i);
	}
	
	_shuffleArray(_deck);
	
	for(var i=0; i<PlayerAmount; i++){
		_HandArray.push(_newHand(_deck));
		
	}
	_PlayerCount = PlayerAmount;
	console.log(_HandArray);
};

engine.prototype.cp = function(){
	return _CurrentPlayer;
}
engine.prototype.ch = function(){
	return _HandArray[_CurrentPlayer];
}
engine.prototype.done = function(){
	return _CurrentPlayer===_PlayerCount;
}
engine.prototype.action = function(ActionS){
	if(ActionS === "hit"){
		var card = _topCard(_deck);
		console.log("you got a "+_prettyCard(card));  
		this.ch().push(card);
		if(this.chv()>=21){
			console.log("You busted! Turn over...");
			sleep(6000);
			++_CurrentPlayer;
			return "";
			}
		
		console.log("You got a card! It is still your turn");
		sleep(6000);
		return "";
	}
	else if(ActionS === "stay"){
		console.log("No card has been obtained");
		sleep(6000);
		++_CurrentPlayer;
		return "";
		
	}
}
engine.prototype.chv = function(){
	//1-9 is = value + 1
	var CurrentHand = this.ch();
	var result = 0;
	for(i=0; i<CurrentHand.length; ++i){
		var CurrentCard = CurrentHand[i]%13;
		if(CurrentCard===0){
			result +=11;	
		}
		else if(CurrentCard>0 && CurrentCard<10){
			result +=CurrentCard+1;	
		}
		else{
			result +=10;
		}
	
	}
	
	return result;
}
engine.prototype.cph = function(){
	return _prettyHand(this.ch());
}
/**************************************************************************************/
// module suffix
module.exports = new engine();

/**************************************************************************************/