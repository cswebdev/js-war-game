function Card(suit, value) {
   this.suit = suit;
   this.value = value;
}
Card.prototype.display = function () {
   return `${this.value} of ${this.suit}`;
};
export default Card;
