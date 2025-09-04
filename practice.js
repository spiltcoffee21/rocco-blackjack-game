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


function Shuffle(deck, count) {
    for (let index = 0; index < count; index++) {
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); 
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }        
    }    
    return deck;
}





function Deal(deck) {
    return deck.pop();

}

 function DealDealer(deck, hand) {
    const card = Deal(deck);
    hand.push(card);
    return card;
}




 function DealPlayer(deck, hand) {
    const card = Deal(deck);
    hand.push(card);
    return card;
}


function CalculateHandValue(hand) {
    let total = 0;
    for (let card of hand) {
        total += card.value;
    }
    return total;
}



var playerHand = [];
var dealerHand = [];
var mydeck = CreateDeck();
mydeck = Shuffle(mydeck, 5);



DealDealer(mydeck, dealerHand);
DealDealer(mydeck, dealerHand);
DealPlayer(mydeck, playerHand);
DealPlayer(mydeck, playerHand);



console.log(Deal(mydeck))
console.log(mydeck);
console.log("Player hand:", playerHand, "Total =", CalculateHandValue(playerHand));
console.log("Dealer hand:", dealerHand, "Total =", CalculateHandValue(dealerHand));
console.log("Remaining cards:", mydeck.length);



document.getElementById("hitcrd").addEventListener("click", function() {
    if (mydeck.length > 0) {
        const card = DealPlayer(mydeck, playerHand);
        console.log("You got:", card);
        console.log("your hand:", playerHand, "Total =", CalculateHandValue(playerHand));  
        console.log("Cards left in deck:", mydeck.length);
    } else {
        console.log("No more cards in the deck!");
    }
});




        