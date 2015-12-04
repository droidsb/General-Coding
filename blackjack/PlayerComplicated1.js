
/**************************************************************************************/

// module prefix
var player = function(){};

/**************************************************************************************/
player.prototype.PlayerChoice = function(CHV,EScore) {
var HES= Math.max.apply(Math, EScore);
//hit just to win?
var HTW = true;
if(CHV===21){
		return "won";
	}
if(HES>CHV && HTW===true && HES <21 && CHV<20){
 	return "hit";
}	

//random hit or stay
var RH = false;
var HoSR = Math.ceil(Math.random() * 2);
if(HoSR===1 && RH===true){	
	return "hit";
}
if(HoSR===2 && RH===true){	
	return "stay";
}

		
	
//hit below only below number	
	if(CHV<16){
		return "hit";
	}
	return "stay";
}

/**************************************************************************************/
// module suffix
module.exports = new player();

/**************************************************************************************/