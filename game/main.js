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

// function getCardPlayer(event) {
//    while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
//       game.draw();
//       console.log(this.player1.hand);
//    }
//    if (this.player1.hand.length <= 0 || this.player1.hand.le <= 0) {
//       return console.log("game over");
//    }

//    console.log("you pressed draw");
// }
// if (drawCard) {
//    drawCard.addEventListener("click", function () {
//       getCardPlayer.bind(game)();
//    });
// }

drawCard.addEventListener("click", callDraw);

function callDraw() {
   console.log("step 1: you clicked draw");
   game.draw();
}

Game.prototype.draw = function () {
   //remove first card from players array

   // const player1Card = this.player1.hand.shift(); //shift removes a value from an array
   // const player2Card = this.player2.hand.shift();

   // this.pot = [player1Card, player2Card, ...this.pot]; // pot is card pot. not bet pot
   this.compare();
   console.log("step 2: call sucessful");

   // ** Removing the condition to add cards to the pot at this stage. **
   // this.pot = [player1Card, player2Card, ...this.pot];
};
