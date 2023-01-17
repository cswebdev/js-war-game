import Player from "./player.js";
import Deck from "./deck.js";

const playerOne = new Player("Player One");
const napoleon = new Player("Napoleon");
let winner = "";

function startGame() {
   playerOne.deck = new Deck();
   playerOne.deck.createDeck();
   playerOne.cardsInHand = [];
   napoleon.deck = new Deck();
   napoleon.deck.createDeck();
   napoleon.cardsInHand = [];
   winner = "";
}

function playRound() {
   playerOne.drawCard();
   napoleon.drawCard();
   let playerOneCard = playerOne.playCard();
   let napoleonCard = napoleon.playCard();
   if (playerOneCard && napoleonCard) {
      if (playerOneCard.value > napoleonCard.value) {
         winner = playerOne.name;
         console.log(`The winner is: ${winner}`);
         document.getElementById("player-one-results").innerHTML =
            "<h2>winner</h2>";
         document.getElementById("player-two-results").innerHTML =
            "<h2>loser</h2>";
      } else if (playerOneCard.value < napoleonCard.value) {
         winner = napoleon.name;
         console.log(`The winner is: ${winner}`);
         document.getElementById("player-one-results").innerHTML =
            "<h2>loser</h2>";
         document.getElementById("player-two-results").innerHTML =
            "<h2>winner</h2>";
      } else {
         winner = "tie";
         console.log(`The game is a tie`);
         document.getElementById("player-one-results").innerHTML =
            "<h2>tie</h2>";
         document.getElementById("player-two-results").innerHTML =
            "<h2>tie</h2>";
      }
   }
   // call the updateCardCounter function
   playerOne.updateCardCounter();
   napoleon.updateCardCounter();
}

// export the functions as named exports
export { startGame, playRound };
