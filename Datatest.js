var readline = require('readline-sync');


var fs = require('fs');


var Families=[];

var loadF = fs.readFileSync('./Families.js', "utf8")

var ParseLF = JSON.parse(loadF);

var IDat = Number(fs.readFileSync('./FIDNum.js', "utf8"));
var IDChild = Number(fs.readFileSync('./CIDnum.js', "utf8"));
Families.push(ParseLF);

console.log(Families);

IDat=IDat+1;


var AllIDs=[];



var AmOfStudEnroll = readline.question("How many students are you enrolling?: ");

var familyID = IDat;

var i=0;


var familyG=[];

while (i<AmOfStudEnroll){
IDChild=IDChild+1;


var name = readline.question("First name of student: ");

var family = readline.question("Last name: ");

var Classes = readline.question("Class: ");

var childID = family.charAt(0)+"-"+IDChild;

var child = ["Family ID:"+familyID, "First name:"+name, "Last name:"+family, "Class:"+Classes, "ID:"+childID]



familyG.push(child)


i=i+1;


}
var p = 0;



/*var bacon=Families[Families.length - 1];

var bacon2=bacon[bacon.length-1];

var bacon3=bacon2[bacon2.length-1];

var bacon4=bacon3[bacon3.length-1];*/



fs.writeFileSync('./FIDNum.js', familyID);
fs.writeFileSync('./CIDnum.js', IDChild);

Families.push(familyG);


//console.log("Families:"+familyID);
//console.log("Students Enrolled:"+IDChild);

fs.writeFileSync('./Families.js', JSON.stringify(Families));


/*while(p<Families.length){

var bacon=Families[Families.length - p-1];
//console.log(bacon);

var bacon2=bacon[bacon.length-1];

var bacon3=bacon2[bacon2.length-1];

var bacon4=bacon3[bacon3.length-1];


AllIDs.push(bacon4);

p=p+1;

}*/

//console.log(Families.length);
//console.log(AllIDs);
