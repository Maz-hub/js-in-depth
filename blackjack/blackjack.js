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

const myDeck = generateDeck();

const drawCard = (deck) => {
    const randomIndex = Math.floor(Math.random() * deck.length); // generate a random number
    const card = deck[randomIndex]; // go to the deck and pull out that card
    deck.splice(randomIndex, 1); // permanently change the deck to remove that card from the deck, so it can't be drawn again by shifting all the indexes as well
    return card; // return the card that we pulled out, so that we have access to it. 
}

const playerHand = [];
const dealerHand = [];

playerHand.push(drawCard(myDeck));
playerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));
dealerHand.push(drawCard(myDeck));

//console.log(playerHand);
//console.log(dealerHand);

const checkScore = (hand) => {
  let total = 0;

    for(const cardObject of hand) {
      // check if it's jack, queen, king
      if (cardObject.card === 'King') {
        total += 10;
      }
      else if (cardObject.card === 'Queen') {
        total += 10;
      }
      else if (cardObject.card === 'Jack') {
        total += 10;
      }
      // check if it's ace
      else if (cardObject.card === 'Ace') {
        total += 1;
      }
      // otherwise it's 2 to 10
      else {
        total += Number(cardObject.card);
      }
    }

    console.log(total);
};

while (true) {
  // deal player card
  playerHand.push(drawCard(myDeck))
  // check if player bust -> over 21
  // check if player 21

  // deal dealer card
  // check if dealer bust -> over 21
  // check if dealer 21
}

//const myCard = drawCard(myDeck);
// console.log(myCard);
// console.log(myDeck.length);



