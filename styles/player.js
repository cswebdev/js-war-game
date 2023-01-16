function Player(name) {
  this.name = name;
  this.hand = [];
}

Player.prototype.addCard = function (card) {
  this.hand.push(card);
};

Player.prototype.playCard = function () {
  return this.hand.shift();
};
