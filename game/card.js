function Card(suit, value) {
   this.value = value;
   this.suit = suit;
}
Card.prototype.display = function () {
   return `${this.value} of ${this.suit}`;
};
export default Card;
