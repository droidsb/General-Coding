/**************************************************************************************/

// module prefix
var engine = function(){};

/**************************************************************************************/
//highest hit number

var hh = 0;

//AI name

var AIN = "AI";

//will they hit above their hit number just to win?

var RW = false;

//enemy score that AI is willing hit above max hit number

var ESH = 0;

var hit=false;
var stay=false;
var score=0;
var EScore=0;
var gamemode="In Progress";


if(score>=hh){
	hit=false;
	stay=true;
}
else if(score<hh){
	hit=true;
}

if(HW===true && EScore>=ESH && score<EScore){
	hit=true;
	stay=false;
} 

if(score===21){
	hit=false;
	stay=false;
}

// Hit or Stay
/**************************************************************************************/
if(hit===true){
	console.log(AIN+" chose to hit!");
}

if(stay===true){
	console.log(AIN+" chose to stay!");
}
/**************************************************************************************/

if(score===21){
	gamemode="finished";
}
if(gamemode==="finished" && score===21){

console.log(AIN+" won the game!");
}

/**************************************************************************************/
// module suffix
module.exports = new engine();

/**************************************************************************************/