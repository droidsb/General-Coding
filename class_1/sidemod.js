var fish = Math.ceil(Math.random() * 1000);
var car = Math.ceil(Math.random() * 6);
var ani =1;
var number=1;



console.log(fish); 
console.log(fish%2);
	if(fish%2===0){

	console.log('no bugs detected');
	}
	else if(fish%2>0){
	console.log('there are bugs in the program');
	}

	if(car*fish%5===0){
	console.log('success');

	}
	if(car*fish%5===1){
	console.log('CRACK!');

	}
	if(car*fish%5===2){
	console.log('BOOM!');

	}
	if(car*fish%5===3){
	console.log('Sizzle');

	}
	if(car*fish%5===4){
	console.log('SNAP!');

	}
	if(car*fish%5===0 && car*fish%10===0 ){
	console.log('BOOM CRASH');

	}
	console.log('%5:'+car*fish%5+' %10:'+car*fish%10);
	console.log(car*fish%5);