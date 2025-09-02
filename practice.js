function CreateDeck(){
var suits = ["Hearts", "Dimonds", "Clubs", "Spades"]
var ranks = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King"]
var deck = [];

    for (var suit of suits) {
        for ( var rank of ranks) {
            let value;
            if (rank ==="Jack" || rank === "Queen" || rank === "King") {
                value = 10;
            }else if (rank === "Ace") {
                value = 11;
            }else {
                value = parseInt(rank);
            }
        
            deck.push({
                suit: suit,
                rank: rank,
                value: value
            });
        }
    }
    return deck;
}
const firstLetters = suits.map(item => item[0]);

function Shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

document.getElementById("hitcrd").addEventListener("click", function() {
    if (mydeck.length > 0) {
        const card = Deal(mydeck);
        console.log("You got:", card);   
        console.log("Cards left in deck:", mydeck.length);
    } else {
        console.log("No more cards in the deck!");
    }
});



function Deal(deck) {
    return deck.pop();

}

function getcard()

var mydeck = CreateDeck();
mydeck = Shuffle(mydeck);
console.log(Deal(mydeck))
console.log(mydeck);







        