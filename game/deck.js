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

   for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
         this.cards.push(new Card(suits[i], values[j]));
      }
   }

   this.shuffle = function () {
      for (let i = this.cards.length - 1; i > 0; i--) {
         let j = Math.floor(Math.random() * (i + 1));
         [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
   };
}

export default Deck;

// export the deck constructor as the default export
