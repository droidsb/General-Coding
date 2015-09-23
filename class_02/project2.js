
var BobA={
"state" : "CA",
"name" : "Bob Jones",
"street" : "123 any street",
"zip_code" : 54321,
"city" : "Anytown"
};
var ChuckA={
"state" : "CA",
"name" : "Chuck Noris",
"street" : "123 Awesome Ville",
"zip_code" : 42420,
"city" : "Cloud Surface"
};
var PeopleAddress={
"Chuck" : ChucksAddress(ChuckA),
"Bob" : BobsAddress(BobA)


}


//console.log(Object.keys(Dictionary));
function BobsAddress(BobA){
	console.log(BobA['name']);
	console.log(BobA['street']);
	console.log(BobA['city']+' '+BobA['state']+'	'+BobA['zip_code']);
}
function ChucksAddress(ChuckA){
	console.log(ChuckA['name']);
	console.log(ChuckA['street']);
	console.log(ChuckA['city']+' '+ChuckA['state']+'	'+ChuckA['zip_code']);
}


//console.log(PeopleAddress['Bob']);


