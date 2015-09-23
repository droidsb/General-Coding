
var card = Math.floor(Math.random() * 52);

console.log(card);
function SuitOf(card) {
	var suit = card % 4; 

	if (suit === 0){
		return "Hearts";
	}
	if (suit === 1){
		return "Clubs";
	}
	if (suit === 2){
		return "Diamonds";
	}
	if (suit === 3){
		return "Spades";
	}
}

function ValueOf(card){
	var value = card % 13;
	
	if (value === 0){
	return "Ace";
	}
	else if(value === 10){
		return "Jack";
	}
	else if(value === 11){
		return "Queen";
	}
	else if(value === 12){
		return "King";
	}
	return value + 1; //number 2 through 10
	
}

console.log(ValueOf(card)+' of '+SuitOf(card));