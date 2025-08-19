function CreateDeck(){
var suits = ["Hearts", "dimonds", "clubs", "spades"]
var values = ["Ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
var deck = [];

    for (var suit of suits) {
        for ( var rank of ranks) {
            let value;
            if (rank ==="jack" || rank === "queen" || rank === "king") {
                value = 10;
            }else if (rank === "ace") {
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
var mydeck = CreateDeck();
console.log(mydeck);










        