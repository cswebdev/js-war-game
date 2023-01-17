import Deck from "./deck.js"; // import the Deck constructor

// define a constructor for the player
function Player(name) {
   this.name = name;
   this.deck = new Deck();
   this.deck.createDeck();
   this.cardsInHand = [];
   this.drawCard = function () {
      if (this.deck.cards.length > 0) {
         this.cardsInHand.push(this.deck.cards.shift());
         console.log(`${this.name} drew a card`);
         console.log(`${this.name} drew a card`);
      } else {
         console.log(`${this.name}'s deck is empty`);
      }
   };
   this.playCard = function () {
      if (this.cardsInHand.length > 0) {
         console.log(
            `${this.name} played a ${this.cardsInHand[0].value} of ${this.cardsInHand[0].suit}`
         );
         return this.cardsInHand.shift();
      } else {
         console.log(`${this.name} has no cards to play`);
      }
   };
   // added function to update the card counter
   this.updateCardCounter = function () {
      let cardCounter = document.getElementById(`${this.name}-card-counter`);
      cardCounter.innerHTML = this.cardsInHand.length;
   };
}

// export the player constructor as the default export
export default Player;
