var readline = require("readline-sync");

var answer = readline.question("What's your name? ");

console.log("Well then! Welcome to my office " + answer + "!");

setTimeout(QF2, 2000)

function QF2() {

    var Q2 = readline.question("What seems to be the problem? ");
    setTimeout(QF3, 2000)
}

function QF3() {

    console.log('Ah, I see...');
    setTimeout(how, 2000)

    function how() {
        var Q3 = readline.question("How does it make you feel? ");
        var pre = 'My prescription for feeling ' + Q3 + ' is, ';
        console.log('Hmmmm...');
        if (Q3 === 'sad' || Q3 === 'Sad' || Q3 === 'Very sad' || Q3 === 'very sad') {
            pre += 'go hang out with some friends or enjoy a good joke.'
        } 
        else if (Q3 === 'Hungry' || Q3 === 'hungry' || Q3 === 'Very hungry' || Q3 === 'very hungry') {
            pre += 'to go to the store and buy some more food.';
        } 
        else if (Q3 === 'Tired' || Q3 === 'tired' || Q3 === 'Very tired' || Q3 === 'very tired') {
            pre += 'try putting in some nap time during free time and not eating late at night.';
        } 
        else {
            pre = "I don't know about feeling " + Q3 + ". Try asking a real doctor.";
        }
        setTimeout(AF4, 2000)

        function AF4() {

            console.log(pre);
        }

    }
}

