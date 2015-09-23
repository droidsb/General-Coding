var RN = Math.ceil(Math.random() * 13);
var RC = Math.ceil(Math.random() * 10);
var RS = Math.ceil(Math.random() * 4);
		
RN=0;	
RC=0;
RS=0;	
var suit = 'Suit'; 
	


for (var cardnum = 1; cardnum<=1; cardnum=cardnum+1){

		if(RS=1){
		suit='Spades'

		}
		if(RS=2){
		suit='Diamonds'

		}
		if(RS=3){
		suit='Clubs'

		}
		if(RS=4){
		suit='Hearts'

		}
		if(RN=1){
			console.log('');
		console.log('Ace of '+suit);	
		}

		else if(RC=RN){
		console.log(RC+' of '+suit);

		}
		else if(RN>10){	
		console.log('Jack of '+suit);
		console.log('Queen of '+suit);
		console.log('King of '+suit);
		}



}
