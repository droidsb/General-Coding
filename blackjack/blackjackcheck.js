
/**************************************************************************************/

// module prefix
var checkError = function(){};

/**************************************************************************************/

var engine = require('./engine');
var DummyPlayer = require('./player');
var HitPlayer = require('./playerhit');
var StayPlayer = require('./playerstay');
var ComplicatedPlayer1 = require('./PlayerComplicated1');
var ComplicatedPlayer2 = require('./PlayerComplicated2');
var HumanPlayer = require('./playerhuman');

var error = false;
var program = "";

var correctVariable = "";
var correctVariable2 = "";
var incorrectVariable = "";
var blackjacktest = false;



checkError.prototype.check = function(Choice, WinnerArray, CHVArray){


var testProgram = function(fName) {

    fName

    if (fName === DummyPlayer.PlayerChoice(0,[0])) {
        correctVariable = "hit, stay, or won";
        program = "playerdummy.js";
        blackjacktest = true;
    }
    if (fName === HitPlayer.PlayerChoice(0,[0])) {
        correctVariable = "hit, stay, or won";
        program = "playerhit.js";
        blackjacktest = true;
    }
    if (fName === StayPlayer.PlayerChoice(0,[0])) {
        correctVariable = "hit, stay, or won";
        program = "playerstay.js";
        blackjacktest = true;
    }
    if (fName === ComplicatedPlayer1.PlayerChoice(0,[0])) {
        correctVariable = "hit, stay, or won";

        program = "ComplicatedPlayer1.js";
        blackjacktest = true;
    }
    if (fName === ComplicatedPlayer2.PlayerChoice(0,[0])) {
        correctVariable = "hit, stay, or won";

        program = "ComplicatedPlayer2.js";
        blackjacktest = true;
    }

    /*if(fName===HumanPlayer.Choice){
    	correctVariable="hit or stay";
    	program="playerhuman.js";
    	blackjacktest=true;
    }*/

	if (blackjacktest === true) {
		if (fName != "hit" && fName != "stay" && fName != "won") {
			error = true;
			incorrectVariable = fName;
			return;
		}
	}

    if (blackjacktest === false) {
        if (fName != correctVariable) {
            error = true;
            incorrectVariable = fName;
            
        }
       return; 
    }
    
}

//checkError.prototype.notify = function(){


    if (error === true && program !="" && incorrectVariable != undefined) {
        console.log("ERROR: Program " + program + " output " + incorrectVariable + ", the correct variable is: " + correctVariable);
        error = false;
        return "failed";
        
    }
//}

    testProgram(Choice, WinnerArray, CHVArray);
    
}   
    
/**************************************************************************************/
// module suffix
module.exports = new checkError();

/**************************************************************************************/
