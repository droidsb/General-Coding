function coins(n) {
    var coinQ = 0;
    var coinQvalue = 0;
    var coinD = 0;
    var coinDvalue = 0;
    var coinP = 0;
    var coinPvalue = 0;
    var coinN = 0;
    var coinNvalue = 0;
    if (n < 0) {
        console.log("Error! Can't not have negative numbers!");
        return;
    } else if (n >= 100) {
        coinQ = +4;
        coinQvalue = +100;
        n = n - 100;

    } else if (n >= 75) {
        coinQ = +3;
        coinQvalue = +75;
        n = n - 75;

    } else if (n >= 50) {
        coinQ = +2;
        coinQvalue = +50;
        n = n - 50;

    } else if (n >= 25) {
        coinQ = +1;
        coinQvalue = +25;
    	n = n - 25;
    }
    //dimes
    if (n <= 100 && n > 0) {
        while (coinDvalue <= n) {
            coinD = coinD + 1;
            coinDvalue = coinDvalue + 10;
            n = n - 10;
        }
		console.log(n);
    } 
    //nickels
    if (n <= 100 && n > 0) {
        while (coinNvalue < n + 1) {
            coinN = coinN + 1;
            coinNvalue = coinNvalue + 5;
            n = n - 5;
        }
		console.log(n);
    }
    //pennies
   if (n <= 100 && n > 0) {
        while (coinPvalue < n + 1) {
            coinP = coinP + 1;
            coinPvalue = coinPvalue + 1;
            n = n - 1;
        }
		console.log(n);
    }


    console.log(coinQ + " quarter(s), " + coinD + " dime(s), " + coinN + " nickel(s), " + coinP + " penny(ies)");
}

coins(95);