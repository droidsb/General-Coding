//want a really fast round?
var FastRound = false;




var CHVFA = 0;


var ErrorCheck = require('./blackjackcheck.js');
var readline = require('readline-sync');
var engine = require('./engine');
var DummyPlayer = require('./player');
var HitPlayer = require('./playerhit');
var StayPlayer = require('./playerstay');
var ComplicatedPlayer1 = require('./PlayerComplicated1');
var ComplicatedPlayer2 = require('./PlayerComplicated2');
var HumanPlayer = require('./playerhuman');
var CHVArray = [];
var fail = false;
//var HardRoundArray = [ComplicatedPlayer1, ComplicatedPlayer2, ComplicatedPlayer1, ComplicatedPlayer1];
//var PlayersUsable = [ComplicatedPlayer1, HitPlayer, DummyPlayer, ComplicatedPlayer2, StayPlayer, HumanPlayer];
var ComChoice = 0;
var DComChoice = 0;
var x = 0;
var y = 0;
var BothD = false;

var WinnerArray = [];
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
var IsOdd = function(num) {
        if (num % 2 === 1) {
            return "odd";
        }
        if (num % 2 === 0) {
            return "even";
        }
    }
    /***************************************************************************************/
    //choices!
    /***************************************************************************************/

if (FastRound === false) {
    var FastORSlow = readline.question("For a fast round press f, for a normal round press n: ");
    console.log("*******************************************************************************");
    var HMHumans = readline.question("How many human players do you want? type your number of players 0-8: ");
     console.log("*******************************************************************************");
    HMHumans = Number(HMHumans);
    if (Number(HMHumans) > 8) {
        console.log("ERROR: Exceeded maximum player limit!");
         console.log("*******************************************************************************");
    }
    if (HMHumans < 8 && HMHumans > 1) {
        var AIYN = readline.question("Would you like AI in the game? yes or no: ");
         console.log("*******************************************************************************");
    }

    if (AIYN === "yes" || HMHumans <= 1) {

        var AIAmount = readline.question("please type the amount of AI you would like in the round 1-8: ");
         console.log("*******************************************************************************");
        AIAmount = Number(AIAmount);
        if (Number(AIAmount) > 8) {
            console.log("ERROR: Exceeded maximum AI limit!");
             console.log("*******************************************************************************");
            return;
        }
        if (Number(AIAmount) < 2 && Number(HMHumans) < 1) {
            console.log("ERROR: Can not have less than 2 AI if there are no players!");
             console.log("*******************************************************************************");
            return;
        }
        if (Number(AIAmount) < 1 && Number(HMHumans) < 2) {
            console.log("ERROR: Can not have less than 1 AI if there is only 1 player!");
             console.log("*******************************************************************************");
            return;
        }

        var HardOREasy = readline.question("For an normal round press n, for a hard round press h, for both type both: ");
         console.log("*******************************************************************************");
        var AICountV = AIAmount;
        if (HardOREasy === "both") {
            BothD = true;
        }
        if (HardOREasy === "n" || HardOREasy === "both") {
            if (BothD === true) {
                AICountV = Number(AIAmount / 2);
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

        for (i = 0; i < Number(HMHumans); i++) {
            PlayerArray.push(HumanPlayer);
            DisplayPlayerArray.push("HumanPlayer");
        }

        if (HardOREasy === "h" || HardOREasy === "both") {
            if (BothD === true) {
                AICountV = Number(AIAmount / 2);
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
if (IsOdd(AIAmount) === "odd" && AIAmount > 1) {
    PlayerArray.pop();
    DisplayPlayerArray.pop();
}
/***************************************************************************************/
//main game part
/***************************************************************************************/
engine.init(PlayerArray.length);
while (!engine.done() && fail===false) {

    console.log('');
    console.log("It is now the turn of player " + engine.cp());
    sleep(500);
    console.log("Their hand is " + engine.cph());
    sleep(500);
    console.log("Their hand value is " + engine.chv());
    sleep(500);


    var Choice = PlayerArray[engine.cp()].PlayerChoice(engine.chv(), CHVArray);
    sleep(500);
    var outcome = engine.action(Choice, WinnerArray, CHVArray);
    console.log(outcome);
	ErrorCheck.check(Choice, WinnerArray, CHVArray);
	//ErrorCheck.notify();
	if(ErrorCheck.check()==="failed"){
	fail=true;
	
	}
    var last_score = CHVArray[CHVArray.length - 1];
    console.log("CHV: " + last_score);
}


console.log(DisplayPlayerArray);
console.log("The game has ended!");
console.log(CHVArray);
console.log(WinnerArray);