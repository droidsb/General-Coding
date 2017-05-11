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
var fakeDeno = [10000,385,65,15,0.50,0.25,0.05,0.1];
var result = moolah(108.67, USDeno);

console.log(result);

for (var i = 0; i < result.length; ++i){
	console.log(result[i] + " of " + USDeno[i]);
}