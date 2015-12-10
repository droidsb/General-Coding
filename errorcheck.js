var DummyPlayer = require('./blackjack/player');
var HitPlayer = require('./blackjack/playerhit');
var StayPlayer = require('./blackjack/playerstay');
var ComplicatedPlayer1 = require('./blackjack/PlayerComplicated1');
var ComplicatedPlayer2 = require('./blackjack/PlayerComplicated2');
var HumanPlayer = require('./blackjack/playerhuman');

var run = false;
var error = false;
var program = "";
var x = 0;
var correctVariable = "";
var correctVariable2 = "";
var incorrectVariable = "";
var blackjacktest = false;

var playerArray = [DummyPlayer, HitPlayer, StayPlayer, ComplicatedPlayer1, ComplicatedPlayer2];




var testProgram = function(fName){

fName

if(fName===DummyPlayer.PlayerChoice){
	correctVariable="hit, stay, or won";
	program="playerdummy.js";
	blackjacktest=true;
}
if(fName===HitPlayer.PlayerChoice){
	correctVariable="hit, stay, or won";
	program="playerhit.js";
	blackjacktest=true;
}
if(fName===StayPlayer.PlayerChoice()){
	correctVariable="hit, stay, or won";
	program="playerstay.js";
	blackjacktest=true;
}
if(fName===ComplicatedPlayer1.PlayerChoice){
	correctVariable="hit, stay, or won";
	
	program="ComplicatedPlayer1.js";
	blackjacktest=true;
}
if(fName===ComplicatedPlayer2.PlayerChoice){
	correctVariable="hit, stay, or won";
	
	program="ComplicatedPlayer2.js";
	blackjacktest=true;
}

/*if(fName===HumanPlayer.Choice){
	correctVariable="hit or stay";
	program="playerhuman.js";
	blackjacktest=true;
}*/


if(blackjacktest===false){
	if(fName !=correctVariable){
		error=true;
		incorrectVariable = fName;
	}
	return;
}
if(blackjacktest===true){
	if(fName !="hit" && fName !="stay" && fName !="won"){
		error=true;
		incorrectVariable = fName;
		return;
	}
}	
}
var notify = function(){
	
		
	if(error===true){
		console.log("ERROR: Program "+program+" output "+incorrectVariable+", the correct variable is: "+correctVariable);
		error=false;
	}
}
for(i=0; i<playerArray.length; i++){
testProgram(playerArray[i].PlayerChoice());
notify();
}