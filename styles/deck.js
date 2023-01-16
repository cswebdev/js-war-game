// export at the bottom
// random number generator between
// creates 52 cards. Pull values from card.js
//
export default function Deck(
  suits = ["clubs", "diamonds", "hearts", "spades"],
  values = ["ace", 2, 2, 3, 4, 5, 6, 7, 8, 9, "jack", "king", "queen"]
) {
  this.deck = [];
  this.suits = suits;
  this.values = values;
  for (let suit in suits) {
    for (let value in values) {
      this.deck.push(`${values[value]} of ${suits[suit]}`);
    }
  }
}
const deckOne = new Deck();
const deckTwo = new Deck();
console.log(deckOne.Deck);
console.log(deckTwo.Deck);

console.log(this);
