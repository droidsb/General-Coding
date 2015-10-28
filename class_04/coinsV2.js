function coins(n){
	var numQ = 0;
	var numD = 0;
	var numN = 0;
	var numP = 0;
	
	while (n>=25) {
		numQ++;
		n -= 25;
	
	}
	
	while (n>=10) {
		numD++;
		n -= 10;
	
	}
	while (n>=5) {
		numN++;
		n -= 5;
	
	}
	while (n>=1) {
		numP++;
		n--;
	
	}
	console.log(numQ + " quarter(s), "
				+numD+ " dime(s), "
				+numN+ " nickel(s), "
				+numP+ " penny(ies)");

	
}


coins(64);





