function d6() {
   return Math.floor(Math.random() * 6+1);
    
}



function bar(label, value){
	var result= '';

	result += label +": ";

	if (value<0){
		value=0;
	}

	if (value>1){
		value=1;
	}

	var count = 50 * value;

	for(var i = 1; i < count; i = i +1){
		result += '*';
	}
console.log(result);
}

function binsum(binArray){
	var result = 0;
	
	var count = binArray.length
	
	for (var i = 0; i < count; i = i + 1){
	result += binArray[i];
	}
		
		
	return result;
}


function histogram(ArrayResult, myLabels){
	var total = binsum(ArrayResult);

	for (var i = 0; i < ArrayResult.length; i = i + 1){
	
		var percentage = ArrayResult[i] / total;
	
		bar(myLabels[i], percentage);

	}

}

function d6_histogram(){
	var result = [0,0,0,0,0,0];
	var labels = [1,2,3,4,5,6];


	for (var i = 0; i < 1000; i = i + 1){
	
		var n = d6();
	
		result[n - 1] = result[n - 1] + 1;
	}

	histogram(result, labels)
}



function d12_histogram(){
	var result = [0,0,0,0,0,0,0,0,0,0,0];
	var labels = [2,3,4,5,6,7,8,9,10,11,12];

	for (var i = 0; i < 1000; i = i + 1){
	
		var n = d6()+ d6();
	
		result[n - 2] = result[n - 2] + 1;
	}

	histogram(result, labels)
}




d6_histogram();
console.log();
d12_histogram();




