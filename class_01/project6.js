
	//var cardnum = Math.ceil(Math.random() * 52);
	//var cardsuit = Math.ceil(Math.random() * 4);
var suit = 'Suit'; 
var suitchanger = 1;	


for (var cardnum = 1; cardnum<=4; cardnum=cardnum+1){
		if(suitchanger===1){
		suit='Spades'

		}
		if(suitchanger===2){
		suit='Diamonds'

		}
		if(suitchanger===3){
		suit='Clubs'

		}
		if(suitchanger===4){
		suit='Hearts'

		}
		if(cardnum<=4){
			console.log('');
		console.log('Ace of '+suit);	

	for (var CC=2; CC<=10; CC=CC+1){
		console.log(CC+' of '+suit);

	}
	
		console.log('Jack of '+suit);
		console.log('Queen of '+suit);
		console.log('King of '+suit);
		suitchanger=suitchanger+1
		}

}
