import Cards from "./card.js";
import Deck from "./deck.js";
import Player from "./player.js";
import Game from "./game.js";

const playGame = document.getElementById("play-button");
const drawCard = document.getElementById("player-one-button");

function gameStart(event) {
   const game = new Game();
   game.play();
}

playGame.addEventListener("click", gameStart);
console.log("you pressed the button");

function getCard(event) {
   const draw = new Game();
   draw.draw();
   console.log(draw);
}

drawCard.addEventListener("click", getCard);
console.log("you pressed draw");
