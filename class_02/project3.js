var readline = require('readline-sync');
function slope_intercept(x1, y1, x2, y2){
	if(x2===x1){
		console.log('x = '+x1)
		return;
	}

	var m = (y2-y1)/(x2-x1);
	var mx = m*x1;
	var b = y1-mx;
	var y = mx+b;
    /*console.log('m='+m);
    console.log('b='+b);
	console.log('y='+y);*/
	console.log('y='+m+'x+'+b)
	
};

function slope(x1,y1,x2,y2){
	var xv=x2-x1;
	var yv=y2-y1;
if(xv === 0){
	console.log("Slope is undefined");
	return;
}
if(yv/xv === 0){
	console.log("Zero Slope");
	return;
}

if(yv/xv !=0){
	console.log("Slope="+yv/xv);
	console.log("Slope fraction="+yv+"/"+xv);
	return;
}


};
var SorSI = readline.question("Slope intercept or just slope? ");
if(SorSI==="slope intercept" || SorSI==="si" || SorSI==="Slope intercept" || SorSI==="Slope Intercept" || SorSI==="SI"){
             //x1,y1,x2,y2
var x1 = readline.question("Type the x1: ");
var y1 = readline.question("Type the y1: ");
var x2 = readline.question("Type the x2: ");
var y2 = readline.question("Type the y2: ");
 //enter the x1,y1 V V V V x2,y2
	slope_intercept(x1,y1,x2,y2);
	
//example (1,2),(3,4)
return;
}

if(SorSI==="slope" || SorSI==="s" || SorSI==="Slope" || SorSI==="S"){
var x1 = readline.question("Type the x1: ");
var y1 = readline.question("Type the y1: ");
var x2 = readline.question("Type the x2: ");
var y2 = readline.question("Type the y2: ");
 //enter the x1,y1 V V V V x2,y2
	slope(x1,y1,x2,y2);
	return;
	}
	
	else{
		console.log("No such program or incorrect spelling");
		return;
	}