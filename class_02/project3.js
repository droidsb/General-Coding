function print_equation(x1, y1, x2, y2){

	var m = (y2-y1)/(x2-x1);
	var mx = m*x1;
	var b = y1-mx;
	var y = mx+b;
    console.log(m);
    console.log(b);
	console.log(y);

}

	print_equation(1,3,3,7);
