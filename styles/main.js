import Card from "./card";
import Deck from "./deck";
import Game from "./game";
import Players from "./players";

export { Card, Deck, Game, Players };

const game = new Game();

document.getElementById("start-button").addEventListener("click", game.start);
document.getElementById("draw-button").addEventListener("click", game.draw);

function updateWinner(winner) {
   document.getElementById("winner").innerHTML = `Winner: ${winner}`;
}

function updateScore(score) {
   document.getElementById("score").innerHTML = `Score: ${score}`;
}

function updateCardCounter(counter) {
   document.getElementById(
      "card-counter"
   ).innerHTML = `Cards Drawn: ${counter}`;
}

function updateGamesWonCounter(counter) {
   document.getElementById(
      "games-won-counter"
   ).innerHTML = `Games Won: ${counter}`;
}
