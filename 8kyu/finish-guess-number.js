class Guesser {
  constructor(number, lives) {
    this.number = number;
    this.lives = lives;
  }

  guess(n) {
    if (this.lives == 0) {
      throw new Error("Out of lives");
    } else if (n !== this.number) {
      this.lives--;
      return false;
    } else if (n === this.number) {
      return true;
    }
  }
}

const game = new Guesser(5, 2);
console.log(game.guess(3));
console.log(game.guess(3));
console.log(game.guess(3));
