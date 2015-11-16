/**************************************************************************************/

// module prefix
var engine = function(){};

/**************************************************************************************/
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

var hit=false;
var stay=false;
var score=0;
var EScore=0;
var gamemode="In Progress";


if(RHS===true && HoSR===1 && score<=hh){
	hit=true;
}
if(RHS===true && HoSR===2 && score<=hh){
	stay=true;
} 
else if(score>=hh){
	hit=false;
	stay=true;
}

if(RHS===false){
if(score>=hh){
	hit=false;
	stay=true;
}
else if(score<=hh){
	hit=true;
}
}

if(RW===true && EScore>=ESH && score<EScore){
	hit=true;
	stay=false;
} 
else if(AH===true){
hit=true;
stay=false;
}
else if(AS===true){
hit=false;
stay=true;
}
if(HitAboveEN===true && EScore>HitNum){
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