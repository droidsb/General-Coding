var engine = require('./engine');

engine.init(3);

while(!engine.done()){
	
	console.log("It is now the turn of player "+engine.cp());
	console.log("Their hand is "+engine.cph());
	console.log("Their hand value is "+engine.chv());
	var choice = "hit";
	if(engine.chv()>=18){
		choice = "stay";
	}
	engine.action(choice);
	
}
console.log("The game has ended!");