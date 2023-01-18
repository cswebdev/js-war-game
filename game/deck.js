import Card from "./card.js"; // import the Card constructor

// define a constructor for the deck
function Deck() {
   this.cards = [];
   const suits = ["hearts", "diamonds", "clubs", "spades"];
   const values = [
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
      "A",
   ];
}
let createDeck = [];
function valuesOfDeck() {
   for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
         this.cards.push(new Card(suits[i], values[j]));
      }
   }
 
}

export default Deck;

// export the deck constructor as the default export
