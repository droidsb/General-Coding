
	//var cardnum = Math.ceil(Math.random() * 52);
	//var cardsuit = Math.ceil(Math.random() * 4);
var suit = 'Suit'; 
var suitchanger = 1;	

for (var cardnum = 1; cardnum<=13; cardnum=cardnum+1){
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


console.log('2 of '+suit);
console.log('3 of '+suit);
console.log('4 of '+suit);
console.log('5 of '+suit);
console.log('6 of '+suit);
console.log('7 of '+suit);
console.log('8 of '+suit);
console.log('9 of '+suit);
console.log('10 of '+suit);

	
	
console.log('Jack of '+suit);
console.log('Queen of '+suit);
console.log('King of '+suit);
}
suitchanger=suitchanger+1;
}