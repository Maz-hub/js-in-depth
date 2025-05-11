const generateDeck = () => {

// create an empty deck to store
const deck = [];

// NOT to hard code one by one of 52 cards, as it would get tidiouse.
//  create 2 arrays: suits and cards
 const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
 const cards = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

 // go throught an array / list of things ? Use a loop


 for (const card of cards) {
    for (const suit of suits) {
        // {card: "King", suit: "Hearts"}
        deck.push({card: card, suit: suit})
    }
 }
 return deck;
 }

 const deck = generateDeck();
 console.log(deck);


