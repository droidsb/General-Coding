var score = 0;
for (x = 0; x <= 1; x = x + 1) {
    
var deck = [ ];
//this makes an array from 0-51
for (var i = 0; i < 52; i = i + 1) {
   deck.push(i);
}

console.log(deck);
        var card = Math.floor(Math.random() * 52);
		//this choses the suit of the card, at random of course. Pretty sure
		//we still need this
        function SuitOf(card) {
            var suit = card % 4;

            if (suit === 0) {
                return "Hearts";
            }
            if (suit === 1) {
                return "Clubs";
            }
            if (suit === 2) {
                return "Diamonds";
            }
            if (suit === 3) {
                return "Spades";
            }
        }
        //this is the actually cards, we need to change this to fit the arrary 'deck'
        function ValueOf(card) {
            var value = card % 13;

            if (value === 0) {
                return "Ace";
            } else if (value === 10) {
                return "Jack";
            } else if (value === 11) {
                return "Queen";
            } else if (value === 12) {
                return "King";
            }
            return value + 1; //number 2 through 10

        }
        //this picks the card out of random, we may not need this
        function BlackJackValue(card) {
            var value = card % 13;
            console.log(ValueOf(card) + ' of ' + SuitOf(card));
            if (value < 10) {
                score = score + value + 1;
            }
            if (value === 12) {
                score = score + 10;
            }
            if (value === 11) {
                score = score + 10;
            }
            if (value === 10) {
                score = score + 10;
            }
      }
      //this function randomizes the array 'deck' so that it is no longer 1-50 
      function shuffleArray(deck) {
    for (var i = deck.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck;
}

    }

    BlackJackValue(card);
	shuffleArray(deck)
    console.log(deck);
    console.log(score);