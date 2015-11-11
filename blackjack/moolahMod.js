/**************************************************************************************/

// module prefix
var moolahMod = function(){};

/**************************************************************************************/

moolahMod.prototype.init = function(){
function moolah(n, denominations){	
	var result = [];
	for ( i = 0; i < denominations.length; ++i){
		var curDenom=denominations[i];
		var count = 0;
		
		while(n>=curDenom){
			count++;
			n-= curDenom;
		}
		result.push(count);

		
	}

	return result;
}

var USDeno = [1000, 100, 20, 10, 5, 2, 1, .25, .10, .05, .01];
var BJDeno = [100, 25, 5, 1];
var result = moolah(108, BJDeno);

console.log(result);

for (var i = 0; i < result.length; ++i){
	console.log(result[i] + " of " + BJDeno[i]);
}
}
/**************************************************************************************/
// module suffix
module.exports = new moolahMod();

/**************************************************************************************/