
/**************************************************************************************/

// module prefix
var player = function(){};

/**************************************************************************************/
player.prototype.PlayerChoice = function(CHV,EScore,turns) {

var turns = 0;
var HES= Math.max.apply(Math, EScore);
//hit just to win?
var HTW = true;
if(CHV===21){
	turns++;
		return "won";
		
	}
if(HES>CHV && HTW===true && HES<20){
	turns++;
 	return "hit";
 	
}	

//random hit or stay
var RH = false;
var HoSR = Math.ceil(Math.random() * 2);
if(HoSR===1 && RH===true){	
	turns++;
	return "hit";
	
}
if(HoSR===2 && RH===true){	
	turns++;
	return "stay";
	
}

		
	
//hit below only below number	
	if(CHV<16){
		turns++;
		return "hit";
		
	}
	turns++;
	return "stay";
	
}

/**************************************************************************************/
// module suffix
module.exports = new player();

/**************************************************************************************/