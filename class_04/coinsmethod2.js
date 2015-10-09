function coins(n){
var coinQ=0;
var coinD=0;
function Q
while(n<=100 && n>0){
coinQ=coinQ+1;
n=n-25;
}
while(n<=100 && n>0){
coinD=coinD+1;
n=n-10;
}
 console.log(coinQ + " quarter(s), " + coinD + " dime(s), ");
}

coins(67);