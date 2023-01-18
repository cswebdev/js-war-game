import Card from "./card.js";
import Deck from "./deck.js";
import Player from "./player.js";

// setting player names
function Game() {
   this.player1 = new Player({
      name: "You",
   });
   this.player2 = new Player({
      name: "Napoleon",
   });
   this.hand = [];
   this.pot = [];
   this.deck = new Deck();
   this.deck.fillDeck();
   console.log("game start");
}

Game.prototype.deal = function () {
   this.player1.hand = this.deck.cards.filter(function (card, index) {
      return !(index & 2);
   });
   this.player2.hand = this.deck.cards.filter(function (card, index) {
      return index & 2;
   });
   console.log(
      this.player1.hand.map(function (card) {
         return card.display();
      })
   );
   console.log(
      this.player2.hand.map(function (card) {
         return card.display();
      })
   );
   this.player1.cardCount = 26;
   this.player2.cardCount = 26;
   console.log("cards delt");
};

// start butto event listner triggers Game & Game.prototype.deal??

Game.prototype.compare = function () {
   if (this.pot[0].value > this.pot[1].value) {
      this.player1.hand = [...this.player1.hand, ...this.pot];
      this.pot = [];
   } else if (this.pot[0].value < this.pot[1].value) {
      this.player2.hand = [...this.player2.hand, ...this.pot];
      this.pot = [];
   } else {
      this.pot = [
         ...this.player1.hand.splice(0, 3),
         ...this.player2.hand.splice(0, 3),
         ...this.pot,
      ];
   }
};

Game.prototype.shuffle = function (deck) {
   for (let i = this.deck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
   }
};
Game.prototype.draw = function () {
   while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
      const player1Card = this.player1.hand.shift();
      const player2Card = this.player2.hand.shift();

      this.pot = [player1Card, player2Card, ...this.pot];
      this.compare();
   }
};

Game.prototype.play = function () {
   this.shuffle(this.deck);
   this.deal();
};

export default Game;
