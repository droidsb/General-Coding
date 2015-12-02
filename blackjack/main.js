var engine = require('./engine');
var DummyPlayer = require('./player');
var HitPlayer = require('./playerhit');
var HumanPlayer = require('./playerhuman');

var PlayerArray = [HumanPlayer, HitPlayer, HitPlayer, DummyPlayer, HumanPlayer];





engine.init(PlayerArray.length);

while(!engine.done()){
	console.log('');
	console.log("It is now the turn of player "+engine.cp());
	console.log("Their hand is "+engine.cph());
	console.log("Their hand value is "+engine.chv());
	var Choice = PlayerArray[engine.cp()].PlayerChoice(engine.chv());
	var outcome=engine.action(Choice);
	console.log(outcome);
	
}
console.log("The game has ended!");