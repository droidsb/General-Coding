//want a really fast round?
var FastRound = false;




var CHVFA = 0;



var readline = require('readline-sync');
var engine = require('./engine');
var DummyPlayer = require('./player');
var HitPlayer = require('./playerhit');
var StayPlayer = require('./playerstay');
var ComplicatedPlayer1 = require('./PlayerComplicated1');
var ComplicatedPlayer2 = require('./PlayerComplicated2');
var HumanPlayer = require('./playerhuman');
var CHVArray = [];
//var HardRoundArray = [ComplicatedPlayer1, ComplicatedPlayer2, ComplicatedPlayer1, ComplicatedPlayer1];
//var PlayersUsable = [ComplicatedPlayer1, HitPlayer, DummyPlayer, ComplicatedPlayer2, StayPlayer, HumanPlayer];
var ComChoice = 0;
var DComChoice = 0;
var x = 0;
var y = 0;
var BothD = false;

var PlayerArray = [];
var DisplayPlayerArray = [];

function sleep(miliseconds) {
    var currentTime = new Date().getTime();

    while (currentTime + miliseconds >= new Date().getTime()) {
        if (FastRound === true) {
            miliseconds = 0;
        }
    }
}
/***************************************************************************************/
//choices!
/***************************************************************************************/

if (FastRound === false) {
    var FastORSlow = readline.question("For a fast round press f, for a normal round press n: ");

    var HMHumans = readline.question("How many human players do you want? type your number of players 0-5: ");
    for (i = 0; i < Number(HMHumans); i++) {
        PlayerArray.push(HumanPlayer);
        DisplayPlayerArray.push("HumanPlayer");
    }
    if (HMHumans < 5 && HMHumans > 0) {
        var AIYN = readline.question("Would you like AI in the game? yes or no: ");
    }
    if (AIYN === "yes" || HMHumans <= 0) {

        var AIAmount = readline.question("please type the amount of AI you would like in the round 1-5: ");
        var HardOREasy = readline.question("For an normal round press n, for a hard round press h, for both type both(if it is an odd number of players it will be round up): ");
        var AICountV = AIAmount;
        if(HardOREasy === "both"){
        	BothD=true;
        }
        if (HardOREasy === "n" || HardOREasy === "both") {
			if(BothD===true){
			 AICountV=Number(AIAmount/2);
			}
           
                /*while (y < Number(AIAmount)) {
                    var AIEasyChoice = Math.ceil(Math.random() * 3);

                    y++;
                   
                }*/
            
            for (i = 0; i < Number(AICountV); i++) {
            var AIEasyChoice = Math.ceil(Math.random() * 3);
            if (AIEasyChoice === 1) {
                ComChoice = DummyPlayer;
                DComChoice = "DummyPlayer";
            }
            if (AIEasyChoice === 2) {
                ComChoice = HitPlayer;
                DComChoice = "HitPlayer";
            }
            if (AIEasyChoice === 3) {
                ComChoice = StayPlayer;
                DComChoice = "StayPlayer";
            }
            
                PlayerArray.push(ComChoice);
                DisplayPlayerArray.push(DComChoice);

            }

        }

        if (HardOREasy === "h" || HardOREasy === "both") {
        if(BothD===true){
			 AICountV=Number(AIAmount/2);
			}
            /*while (x < AIAmount) {
                var Com1OR2 = Math.ceil(Math.random() * 2);
                x++;
            }*/
            for (i = 0; i < Number(AICountV); i++) {
            var Com1OR2 = Math.ceil(Math.random() * 2);
            if (Com1OR2 === 1) {
                ComChoice = ComplicatedPlayer1;
                DComChoice = "ComplicatedPlayer1";
            }
            if (Com1OR2 === 2) {
                ComChoice = ComplicatedPlayer2;
                DComChoice = "ComplicatedPlayer2";
            }
            
                PlayerArray.push(ComChoice);
                DisplayPlayerArray.push(DComChoice);

            }
        }
    }
    if (FastORSlow === "f") {
        FastRound = true;
    } else {
        FastRound = false;
    }
}
/***************************************************************************************/
//main game part
/***************************************************************************************/
engine.init(PlayerArray.length);
while (!engine.done()) {

    console.log('');
    console.log("It is now the turn of player " + engine.cp());
    sleep(500);
    console.log("Their hand is " + engine.cph());
    sleep(500);
    console.log("Their hand value is " + engine.chv());
    sleep(500);
    CHVFA = engine.chv();
    var Choice = PlayerArray[engine.cp()].PlayerChoice(engine.chv(), CHVArray);
    sleep(500);
    var outcome = engine.action(Choice);
    console.log(outcome);


    console.log("CHVFA: " + CHVFA);
    CHVArray.push(CHVFA);
}


console.log(DisplayPlayerArray);
console.log("The game has ended!");
console.log(CHVArray);