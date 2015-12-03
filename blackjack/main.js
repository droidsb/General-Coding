var engine = require('./engine');
var DummyPlayer = require('./player');
var HitPlayer = require('./playerhit');
var ComplicatedPlayer1 = require('./PlayerComplicated1');
var ComplicatedPlayer2 = require('./PlayerComplicated2');
var HumanPlayer = require('./playerhuman');
var CHVArray = [];
var PlayerArray = [ComplicatedPlayer1, HitPlayer, DummyPlayer, ComplicatedPlayer2, HumanPlayer, ComplicatedPlayer1];

var CHVFA = 0;
function sleep(miliseconds) {
           var currentTime = new Date().getTime();

           while (currentTime + miliseconds >= new Date().getTime()) {
           }
       }

engine.init(PlayerArray.length);

while(!engine.done()){
	console.log('');
	console.log("It is now the turn of player "+engine.cp());
	sleep(500);
	console.log("Their hand is "+engine.cph());
	sleep(500);
	console.log("Their hand value is "+engine.chv());
	sleep(500);
	CHVFA=engine.chv();
	var Choice = PlayerArray[engine.cp()].PlayerChoice(engine.chv(),CHVArray);
	sleep(500);
	var outcome=engine.action(Choice);
	console.log(outcome);
	
	console.log("CHVFA: "+CHVFA);
	CHVArray.push(CHVFA);
}

console.log("The game has ended!");
console.log(CHVArray);