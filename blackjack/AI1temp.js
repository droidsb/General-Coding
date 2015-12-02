/**************************************************************************************/
// module prefix
var player = function() {};

/**************************************************************************************/
player.prototype.PlayerChoice = function(CHV) {
    //highest hit number

        var hh = 21;

        //AI name

        var AIN = "AI";

        //will they hit above their hit number just to win?

        var RW = false;

        //enemy score that AI is willing hit above max hit number

        var ESH = 0;

        //will they randomly hit or stay?

        var RHS = false;

        //always hit?

        var AH = false;

        //always stay?

        var AS = false;

        var HoSR = Math.ceil(Math.random() * 2);

        //hit when enemy is above certain number

        var HitAboveEN = false;
        var HitNum = 0;

        var hit = false;
        var stay = false;
        //may still need this
        //var score = 0;
        
        var EScore = 0;
        var gamemode = "In Progress";


        if (RHS === true && HoSR === 1 && CHV <= hh) {
            hit = true;
        }
        if (RHS === true && HoSR === 2 && CHV <= hh) {
            stay = true;
        } else if (CHV >= hh) {
            return "stay";
        }

        if (RHS === false) {
            if (CHV >= hh) {
				return "stay";
            } else if (CHV <= hh) {
                return "hit";
            }
        }

        if (RW === true && EScore >= ESH && CHV < EScore) {
            return "hit";
            
        } else if (AH === true) {
			return "hit";
            
        } else if (AS === true) {
           return "stay";
        }
        if (HitAboveEN === true && EScore > HitNum) {
            return "hit";
        }


        if (score === 21) {
            return "stay";
        }
}
        
    /**************************************************************************************/
    // module suffix
module.exports = new player();

/**************************************************************************************/