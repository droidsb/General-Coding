function coins(n) {
    var coinQ = 0;
    var coinQvalue = 0;
    var coinD = 0;
    var coinDvalue = 0;
    var coinP = 0;
    var coinPvalue = 0;
    if (n < 0) {
        console.log("Error! Can't not have negative numbers!");
        return;
    } else if (n >= 100) {
        coinQ = +4;
        coinQvalue = +100;

    } else if (n >= 75) {
        coinQ = +3;
        coinQvalue = +75;

    } else if (n >= 50) {
        coinQ = +2;
        coinQvalue = +50;

    } else if (n >= 25) {
        coinQ = +1;
        coinQvalue = +25;

    }
    if (n - coinQvalue <= 100 && n - coinQvalue > 0) {
        while (coinDvalue <= n) {
            coinD = coinD + 1;
            coinDvalue = coinDvalue + 10;
            n = n - 10;
        }

    } else if (n - coinDvalue <= 100 && n - coinDvalue > 0) {
        while (coinPvalue < n + 1) {
            coinP = coinP + 1;
            coinPvalue = coinPvalue + 1;
            n = n - 1;
        }

    }


    console.log(coinQ + " quarter(s), " + coinD + " dime(s), " + coinP + " penny(ies)");
}

coins(67);