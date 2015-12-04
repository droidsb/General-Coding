var humanplayer = 0;
var ary = [humanplayer,2,3,4,20,30240,40,40,30,1,4,0,"budder"];
var popsave = [];
console.log(ary);
for(i=0; i<5; i++){
popsave.push(ary.pop());
}
console.log(popsave);
var IsOdd = function(num) { 
if(num % 2===1){
	return "odd";
}
if(num % 2===0){
	return "even";
}
}

IsOdd(24);

if(IsOdd(23)==="even"){
	console.log("hi");

}