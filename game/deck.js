import Card from "./card.js"; // import the Card constructor

function Deck() {
   this.cards = [];
}

// define a constructor for the deck
Deck.prototype.fillDeck = function () {
   const suits = ["hearts", "diamonds", "clubs", "spades"];
   const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

   // for (let i = 0; i < suits.length; i++) {
   //    for (let j = 0; j < values.length; j++) {
   //       if (values[j] === "Ace") {
   //          this.cards.push(new Card(14, suits[i]));
   //       } else if (values[j] === "King") {
   //          this.cards.push(new Card(13, suits[i]));
   //       } else if (values[j] === "Queen") {
   //          this.cards.push(new Card(12, suits[i]));
   //       } else if (values[j] === "Jack") {
   //          this.cards.push(new Card(11, suits[i]));
   //       } else {
   //          this.cards.push(new Card(values[j], suits[i]));
   //       }
   //    }
   // }

   //** Log Update**/
   //# fixed the suit and value being reversed
   //#
   //#

   for (let i = 0; i < suits.length; i++) {
      for (let j = 0; j < values.length; j++) {
         if (values[j] === 14) {
            this.cards.push(new Card(suits[i], values[j])); //ace
         } else if (values[j] === 13) {
            this.cards.push(new Card(suits[i], values[j])); //king
         } else if (values[j] === 12) {
            this.cards.push(new Card(suits[i], values[j])); //queen
         } else if (values[j] === 11) {
            this.cards.push(new Card(suits[i], values[j])); //jack
         } else {
            this.cards.push(new Card(suits[i], values[j])); //all else
         }
      }
   }
};

export default Deck;

// export the deck constructor as the default export
