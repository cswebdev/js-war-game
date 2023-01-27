import Card from "./card.js";
import Deck from "./deck.js";
import Player from "./player.js";
const player1Results = document.getElementById("player-one-results");
const player2Results = document.getElementById("player-two-results");
const player1Name = document.getElementById("player-one-name");
const player2Name = document.getElementById("player-two-name");
const player1CardDisp = document.getElementById("card-face-front-1");
const player2CardDisp = document.getElementById("card-face-front-2");

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

Game.prototype.compare = function () {
   // take the first item from each player's hand array
   let player1Card = this.player1.hand.shift();
   let player2Card = this.player2.hand.shift();
   console.log("player 1's card: " + player1Card.value);
   console.log("player 2's card: " + player2Card.value);
   document.getElementById("card-face-front-1").innerHTML =
      player1Card.display();
   document.getElementById("card-face-front-2").innerHTML =
      player2Card.display();

   // compare the cards' values
   if (player1Card.value > player2Card.value) {
      console.log("Player 1 won");
      player1Results.innerHTML = `<p>You Won!</p>`;
      player2Results.innerHTML = `<p>Napoleon Lost!</p>`;
      // add the winning card to the pot
      this.player1.hand.push(player1Card, player2Card);

      // this.pot.push(player1Card);
   } else if (player2Card.value > player1Card.value) {
      console.log("Player 2 won");
      player2Results.innerHTML = `<p>Napoleon Won!</p>`;
      player1Results.innerHTML = `<p>You Lost!</p>`;
      // add the winning card to the pot
      this.player2.hand.push(player1Card, player2Card);
      // this.pot.push(player2Card);
   } else {
      console.log("It's a tie");
      // handle tie scenario
      this.pot = [...this.pot, player1Card, player2Card];
      this.war();
   }

   // update the card counters
   document.getElementById("player-one-card-counter").innerHTML =
      this.player1.hand.length;
   document.getElementById("player-two-card-counter").innerHTML =
      this.player2.hand.length;
};

Game.prototype.war = function () {
   // credit to Eric
   alert("war is running");
   const player1WarCards = this.player1.hand.splice(0, 3);
   const player2WarCards = this.player2.hand.splice(0, 3);

   this.pot = this.pot.concat(player1WarCards, player2WarCards);
   console.log(this.pot);
   // console.log(this.player1.hand.length, this.player2.hand.length);

   if (player1WarCards[2] === player2WarCards[2]) {
      // console.log("player1 war hand: " + player1Card);
      // console.log("player2 war hand: " + player2Card);
      console.log("tie again");
      this.war();
      // this.pot.push(player1Card, player2Card);
   } else if (player1WarCards[2] > player2WarCards[2]) {
      // console.log("player1 war hand: " + player1Card);
      // console.log("player2 war hand: " + player2Card);
      console.log("player 1 wins war");
      console.log(this.player1.hand.length);
      console.log(this.pot);
      // console.log(player1.hand.push(this.pot));
      // this.pot =[];

      this.player1.hand.push(...this.pot, player1Card, player2Card);
   } else {
      // console.log("player1 war hand: " + player1Card);
      // console.log("player2 war hand: " + player2Card);
      console.log("player 2 wins war");
      console.log(this.player2.hand.length);
      console.log(this.pot);
      this.player2.hand.push(...this.pot, player1Card, player2Card);
   }
   if (this.player1.hand.length === 0) {
      console.log("Player 2 wins");
   } else if (this.player2.hand.length === 0) {
      console.log("Player 1 wins");
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

export default Game;
