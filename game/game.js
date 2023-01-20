import Card from "./card.js";
import Deck from "./deck.js";
import Player from "./player.js";
const player1Results = document.getElementById("player-one-results");
const player2Results = document.getElementById("player-two-results");

// setting player names
function Game(
   player1Results,
   player2Results,
   player1CardCounter,
   player2CardCounter
) {
   this.player1Results = player1Results;
   this.player2Results = player2Results;
   this.player1CardCounter = player1CardCounter;
   this.player2CardCounter = player2CardCounter;
   this.player1 = new Player({
      name: "You",
   });
   this.player2 = new Player({
      name: "Napoleon",
   });
   this.pot = [];
   this.deck = new Deck();
   this.deck.fillDeck();
   this.shuffle();
   console.log("game start");
}
// initial deal

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
   document.getElementById("player-one-card-counter").innerHTML =
      this.player1.hand.length;
   document.getElementById("player-two-card-counter").innerHTML =
      this.player2.hand.length;
   console.log("cards delt");
};

//drawing cards

Game.prototype.draw = function () {
   //remove first card from array and add it to pot

   // while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
   let player1Card = this.player1.hand.shift();
   let player2Card = this.player2.hand.shift();
   this.pot = [player1Card, player2Card, ...this.pot];
   console.log(player1Card);
   console.log(this.player1.hand);

   //update card counter
   // document.getElementById("player-one-card-counter").innerHTML =
   //    player1.hand;
   // document.getElementById("player-two-card-counter").innerHTML =
   //    player2.hand;
   // player1CardCounter.innerHTML = player1Card.hand.length;
   // player2CardCounter.innerHTML = player2Card.hand.length;
   // player1CardCounter.innerHTML = player1Card.display();
   // player2CardCounter.innerHTML = player2Card.display();
   // }
   this.compare();
};

Game.prototype.compare = function () {
   if (player1Card === player2Card) {
      this.war();
   } else if (player1Card > player2Card) {
      this.player1.hand.push(player1Card, player2Card);
      this.player1CardCounter.innerHTML = this.player1.hand.length;
      console.log("player 1 wins round", this.player1.hand.length);
   } else {
      this.player2.hand.push(player1Card, player2Card);
      this.player2CardCounter.innerHTML = this.player2.hand.length;
      console.log("player 2 wins round", this.player2.hand.length);
   }
   if (this.player1.hand.length === 52) {
      console.log("Player 1 wins");
   } else if (this.player2.hand.length === 52) {
      console.log("Player 2 wins");
   } else {
      if (this.player1.hand.length == 0) {
         player1Results.innerHTML = "Player 1 has no more cards";
      }
      if (this.player2.hand.length == 0) {
         player2Results.innerHTML = "Player 2 has no more cards";
      }
   }
};

Game.prototype.war = function () {
   this.pot = [
      this.player1.hand.shift(),
      this.player1.hand.shift(),
      this.player2.hand.shift(),
      this.player2.hand.shift(),
   ];
   while (true) {
      const player1Card = this.player1.hand.shift();
      const player2Card = this.player2.hand.shift();
      if (player1Card === player2Card) {
         this.apot.push(player1Card, player2Card);
      } else if (player1Card > player2Card) {
         this.player1.hand.push(...this.pot, player1Card, player2Card);
         break;
      } else {
         this.player2.hand.push(...this.pot, player1Card, player2Card);
         break;
      }
      if (this.player1.hand.length === 0) {
         console.log("Player 2 wins");
         break;
      } else if (this.player2.hand.length === 0) {
         console.log("Player 1 wins");
         break;
      }
   }
};

Game.prototype.shuffle = function () {
   for (let i = this.deck.cards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [this.deck.cards[i], this.deck.cards[j]] = [
         this.deck.cards[j],
         this.deck.cards[i],
      ];
   }
   console.log(this.deck);
};

Game.prototype.play = function () {
   this.shuffle(this.deck);
   this.deal();
};

export default Game;
