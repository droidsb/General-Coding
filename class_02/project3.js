function print_equation(x1, y1, x2, y2){
	if(x2===x1){
		console.log('x = '+x1)
		return;
	}

	var m = (y2-y1)/(x2-x1);
	var mx = m*x1;
	var b = y1-mx;
	var y = mx+b;
    console.log('m='+m);
    console.log('b='+b);
	console.log('y='+y);
	console.log('y='+m+'x+'+b)
	
}

	print_equation(1,2,4,2);
