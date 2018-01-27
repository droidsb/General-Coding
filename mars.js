var temp = Math.floor(Math.random() * 100) + -50

var duststorm = Math.floor(Math.random() * 25) + 1


var foodeat = Math.floor(Math.random() * 20) + 40

var waterdrink = Math.floor(Math.random() * 13) + 2

var duststormtimeh = Math.floor(Math.random() * 16) + 8
var duststormtimem = Math.floor(Math.random() * 59) + 0
var duststormAMorPM = Math.floor(Math.random() * 1) + 0

var nighttemp = Math.floor(Math.random() * 45) + 15

var missiondays=32;

var crewnumber=2;

var sol=36;

//gallons
//crewnumber*383.33333333333

var water = Math.round(crewnumber*15*missiondays);


//var oxygenlevels=1705000;

//crew*284166.666666667
var oxygenlevels=Math.round(crewnumber*11000*missiondays);

var visibility = Math.floor(Math.random() * 12144) + 2640

//you can only survive about 10 minutes when it is -50 maybe?
//Get inside before night! Temperatures can drop to -90 F!
//Temperatures can get to -195F in the winter with highs of 50 degrees


console.log("Sol:"+(sol+1));

//crew*1533.33333333333
var food=Math.round(crewnumber*60*missiondays);
food=food-((foodeat*crewnumber)*sol);
console.log("Food:"+food);
water=water-(crewnumber*waterdrink*sol)
console.log("Water:"+water);
//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

(function() {
  /**
   * Decimal adjustment of a number.
   *
   * @param {String}  type  The type of adjustment.
   * @param {Number}  value The number.
   * @param {Integer} exp   The exponent (the 10 logarithm of the adjustment base).
   * @returns {Number} The adjusted value.
   */
  function decimalAdjust(type, value, exp) {
    // If the exp is undefined or zero...
    if (typeof exp === 'undefined' || +exp === 0) {
      return Math[type](value);
    }
    value = +value;
    exp = +exp;
    // If the value is not a number or the exp is not an integer...
    if (value === null || isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
      return NaN;
    }
    // If the value is negative...
    if (value < 0) {
      return -decimalAdjust(type, -value, exp);
    }
    // Shift
    value = value.toString().split('e');
    value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
    // Shift back
    value = value.toString().split('e');
    return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
  }

  // Decimal round
  if (!Math.round10) {
    Math.round10 = function(value, exp) {
      return decimalAdjust('round', value, exp);
    };
  }
  // Decimal floor
  if (!Math.floor10) {
    Math.floor10 = function(value, exp) {
      return decimalAdjust('floor', value, exp);
    };
  }
  // Decimal ceil
  if (!Math.ceil10) {
    Math.ceil10 = function(value, exp) {
      return decimalAdjust('ceil', value, exp);
    };
  }
})();


//\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\


var airuse = Math.floor(Math.random() * 1000) + 10500
//duststorm=17;
var air = airuse*crewnumber*sol;
var aircalc = oxygenlevels-((airuse*crewnumber)*sol);

var waterD = Math.round(water/(15*crewnumber))
var foodD = Math.round(food/(60*crewnumber))
var airD = Math.round(aircalc/(11000*crewnumber))

//console.log("Water!!!" +Math.round(water/(15*crewnumber)));
//console.log("Food!!!" +Math.round(food/(60*crewnumber)));
//console.log("Aircalc:"+aircalc);
//console.log("Air!!!" +Math.round(aircalc/(11000*crewnumber)));

console.log("Temperature:"+temp+"F");
console.log("Temperature:"+Math.round((temp-32)/1.8)+"C");
console.log("Night Temperature:"+(temp-nighttemp)+"F");
var nighttempchange=temp-nighttemp;
console.log("Night Temperature:"+Math.round((nighttempchange-32)/1.8)+"C");
oxygenlevels=oxygenlevels-air;
console.log("Oxygen levels:"+oxygenlevels);
if (duststorm===17){


	console.log("Dust storm warning! Approaching at: "+duststormtimeh+":"+duststormtimem);
	
	
}

console.log("Visibility: "+Math.round10(visibility/5280, -2)+" miles");

if(duststorm===17){
	visibility=Math.floor(Math.random() * 5) + 0
	console.log("Visibility during storm: "+visibility+" feet");
	
	}
console.log("Safe departure estimate:"+Math.min(waterD-1, foodD-1, airD-1));

console.log("Sols left:"+Math.round(oxygenlevels/(11000*crewnumber)));