import Cards from "./card.js";
import Deck from "./deck.js";
import Player from "./player.js";
import Game from "./game.js";

let game;
const playGame = document.getElementById("play-button");
const drawCard = document.getElementById("player-one-button");

function gameStart(event) {
   game = new Game();
   game.play();
   document.getElementById("player-one-card-counter").innerHTML =
      game.player1.hand.length;
   document.getElementById("player-two-card-counter").innerHTML =
      game.player2.hand.length;
}

playGame.addEventListener("click", gameStart);
console.log("you pressed the button");

function getCard(event) {
   const player1Card = game.player1.hand.shift();
   const player2Card = game.player2.hand.shift();
   console.log(player1Card);
   console.log(player2Card);
   // displays the cards in the HTMl
   document.getElementById("player-one-deck").innerHTML = player1Card.display();
   document.getElementById("player-two-deck").innerHTML = player2Card.display();

   //card counter
   document.getElementById("player-one-card-counter").innerHTML =
      game.player1.hand.length;
   document.getElementById("player-two-card-counter").innerHTML =
      game.player2.hand.length;

   //display winner
   const player1Results = document.getElementById("player-one-results");
   const player2Results = document.getElementById("player-two-results");
   if (this.pot[0].value > this.pot[1].value) {
      player1Results.getElementsByClassName("result")[0].innerHTML = "winner";
      player2Results.getElementsByClassName("result")[0].innerHTML = "loser";
      player1Results
         .getElementsByClassName("result")[0]
         .classList.add("winner");
   }
}
drawCard.addEventListener("click", getCard);
console.log("you pressed draw");
