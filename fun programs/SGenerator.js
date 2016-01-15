

var RSentence = function(){

var FirstW = ["The ", "A ", "Once upon a time, a "];
var SubW = ["boy ", "girl ", "lizard ", "dragon ", "pirate ","bird ", "tiger "];
var VerbW = ["jumped ", "skipped ", "flew ", "stalked ", "glided ", "trudged ", "crawled "];
var MidW = ["along the "];
var Noun = ["road ", "pathway ", "riverbank ", "shore ", "boards ", "swampy path "];
var Fill = ["toward their ", "away from their ","toward the "];
var Noun2 = ["homestead. ","cabin. ","general store. ", "fishing docks. ", "hunting grounds. "]; 
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
shuffleArray(FirstW);
shuffleArray(SubW);
shuffleArray(VerbW);
shuffleArray(MidW);
shuffleArray(Noun);
shuffleArray(Fill);
shuffleArray(Noun2);

console.log(FirstW.pop()+SubW.pop()+VerbW.pop()+MidW.pop()+Noun.pop()+Fill.pop()+Noun2.pop());
};

var RSentence2 = function(){

var FirstW = ["They came upon a "];
var SubW = ["giant ", "small ", "red ", "stinky ", "sweet "];
var VerbW = ["bat ", "cat ", "dog ", "house ", "city "];
var MidW = ["that was having a "];
var Noun = ["great time with ", "bad time with ", "tough time with ", "huge party with "];
var Fill = ["everyone from the town. ", "nobody at all. ", "no more food. ", "to many deserts. "];
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
};
shuffleArray(FirstW);
shuffleArray(SubW);
shuffleArray(VerbW);
shuffleArray(MidW);
shuffleArray(Noun);
shuffleArray(Fill);



console.log(FirstW.pop()+SubW.pop()+VerbW.pop()+MidW.pop()+Noun.pop()+Fill.pop());
};

RSentence();

RSentence2();
