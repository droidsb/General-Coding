for (var looper = 1; looper <= 100; looper=looper + 1) {
	if (looper % 3 === 0 && looper % 5 === 0) {
		console.log('FizzBuzz');
	}
	else if (looper % 3 === 0) {
		console.log('Fizz');
	}
	else if (looper % 5 === 0) {
		console.log('Buzz');
	}
    else {
		console.log(looper);
	}
}