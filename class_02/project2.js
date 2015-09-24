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
console.log('List:Bob_Jones, Chuck_Noris, God');
  console.log('');
 
function PrintAddress(Add){
	console.log(Add['name']);
	console.log(Add['street']);
	console.log(Add['city']+' '+Add['state']+'	'+Add['zip_code']);
}
//Change this __V__ to get their addresses by type their first and last name
  PrintAddress(Chuck_Noris);
  console.log('');
  PrintAddress(Bob_Jones);
  console.log('');
  PrintAddress(God);
 //Example:Bob_Jones


