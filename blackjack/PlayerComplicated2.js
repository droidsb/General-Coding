
/**************************************************************************************/

// module prefix
var player = function(){};

/**************************************************************************************/
player.prototype.PlayerChoice = function(CHV,EScore) {
var HES= Math.max.apply(Math, EScore);
//hit just to win?
var HTW = true;
//hit below number?
var HBN = false;
if(HES>CHV && HTW===true){
 	return "hit";
}	

//random hit or stay
var RH = true;
var HoSR = Math.ceil(Math.random() * 2);
if(HoSR===1 && RH===true){	
	return "hit";
}
if(HoSR===2 && RH===true){	
	return "stay";
}

		
	
//hit below only below number	
	if(CHV<16 && HBN===true){
		return "hit";
	}
	return "stay";
}

/**************************************************************************************/
// module suffix
module.exports = new player();

/**************************************************************************************/