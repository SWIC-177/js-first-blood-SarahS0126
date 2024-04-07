function createScoreIncrementer(score) {
  return function addScore(currentScore) {
    return currentScore + score;
  }
}
let testScore = createScoreIncrementer(1)(2)
console.log (`Score:${testScore}`)
