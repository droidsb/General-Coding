
var Bob_Jones={
	"state" : "CA",
	"name" : "Bob Jones",
	"street" : "123 any street",
	"zip_code" : 54321,
	"city" : "Anytown"
}
var Chuck_Noris={
	"state" : "ZX",
	"name" : "Chuck Noris",
	"street" : "123 Awesome Ville",
	"zip_code" : 42420,
	"city" : "Cloud Surface"
}
var God={
	"state" : "Heaven",
	"name" : "God",
	"street" : "The Throne of God",
	"zip_code" : 7777777,
	"city" : "The City of God:"
}

/*var PeopleAddress={
	"Chuck" : PrintAddress(ChuckA),
	"Bob" : PrintAddress(BobA)


}*/


//console.log(Object.keys(Dictionary));

function PrintAddress(Bob_Jones){
	console.log(Bob_Jones['name']);
	console.log(Bob_Jones['street']);
	console.log(Bob_Jones['city']+' '+Bob_Jones['state']+'	'+Bob_Jones['zip_code']);
}
function PrintAddress(Chuck_Noris){
	console.log(Chuck_Noris['name']);
	console.log(Chuck_Noris['street']);
	console.log(Chuck_Noris['city']+' '+Chuck_Noris['state']+'	'+Chuck_Noris['zip_code']);
}
function PrintAddress(God){
	console.log(God['name']);
	console.log(God['street']);
	console.log(God['city']+' '+God['state']+'	'+God['zip_code']);
}

  //Change this __V__ to get their addresses by type their first and last name
PrintAddress(Bob_Jones);
//Example:Bob_Jones

