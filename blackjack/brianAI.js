/**************************************************************************************/

// module prefix
var engine = function(){};

/**************************************************************************************/
var hit=false;
var stay=false;
var score=0;
var EScore=0;
var gamemode="In Progress";


if(score>=18){
	hit=false;
	stay=true;
}
else if(score<18){
	hit=true;
}
if(EScore>=20 && score<EScore){
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
	console.log("Brian chose to hit!");
}

if(stay===true){
	console.log("Brian chose to stay!");
}
/**************************************************************************************/

if(score===21){
	gamemode="finished";
}
if(gamemode==="finished" && score===21){

console.log("Brian won the game!");
}

/**************************************************************************************/
// module suffix
module.exports = new engine();

/**************************************************************************************/