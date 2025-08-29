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

function Shuffle(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1)); 
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}


function Deal(deck) {
    return deck.pop();

}



var mydeck = CreateDeck();
mydeck = Shuffle(mydeck);
console.log(Deal(mydeck))
console.log(mydeck);







        