var suit = 'Suit'; 



for (var cardnum = 1; cardnum<=4; cardnum=cardnum+1){
		if(cardnum===1){
		suit='Spades'

		}
		if(cardnum===2){
		suit='Diamonds'

		}
		if(cardnum===3){
		suit='Clubs'

		}
		if(cardnum===4){
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
		
		}

}