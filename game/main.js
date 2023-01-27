import Game from "./game.js";

let game;
// const $startGame = document.getElementById("play-button");
const drawCard = document.getElementById("player-one-button");
const $display1 = document.getElementById("player-one-deck");
const $display2 = document.getElementById("player-two-deck");
const player1Results = document.getElementById("player-one-results");
const player2Results = document.getElementById("player-two-results");
const player1CardCounter = document.getElementById("player-one-card-counter");
const player2CardCounter = document.getElementById("player-two-card-counter");
const startButton = document.getElementById("play-button");

startButton.addEventListener("click", function () {
   game = new Game(
      player1Results,
      player2Results,
      player1CardCounter,
      player2CardCounter
   );
   game.shuffle();
   game.deal();
});

drawCard.addEventListener("click", callDraw);

function callDraw() {
   game.draw();
}

Game.prototype.draw = function () {
   //remove first card from players array

   // const player1Card = this.player1.hand.shift(); //shift removes a value from an array
   // const player2Card = this.player2.hand.shift();

   // this.pot = [player1Card, player2Card, ...this.pot]; // pot is card pot. not bet pot
   this.compare();
};
