const generateDeck = () => {
  // create an empty deck to store
  const deck = [];

  // NOT to hard code one by one of 52 cards, as it would get tidiouse.
  //  create 2 arrays: suits and cards
  const suits = ["Hearts", "Clubs", "Diamonds", "Spades"];
  const cards = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jack",
    "Queen",
    "King",
    "Ace",
  ];

  // go throught an array / list of things ? Use a loop

  for (const card of cards) {
    for (const suit of suits) {
      // {card: "King", suit: "Hearts"}
      deck.push({ card: card, suit: suit });
    }
  }
  return deck;
};

const deck = generateDeck();

const drawCard = () => {
    const randomIndex = Math.floor(Math.random() * deck.length); // generate a random number
    const card = deck[randomIndex]; // go to the deck and pull out that card
    deck.splice(randomIndex, 1); // permanently change the deck to remove that card from the deck, so it can't be drawn again by shifting all the indexes as well
    return card; // return the card that we pulled out, so that we have access to it. 
}
const myCard = drawCard();
console.log(myCard);
console.log(deck.length);

