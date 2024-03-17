const whoWon = require('../RPS.js');

describe("The whoWon function", function () {

  test("declares a TIE if the players choose the same thing", function () {
    let actual = whoWon("rock", "rock");
    let expected = "TIE!";
    expect(actual).toEqual(expected);
  });

  test("declares player 1 the winner if player 1 chooses 'paper' and player 2 chooses 'rock'", function () {
    let actual = whoWon("paper", "rock");
    let expected = "Player 1 wins!";
    expect(actual).toEqual(expected);
  });

  test("declares player 2 the winner if player 1 chooses 'rock' and player 2 chooses 'paper'", function () {
    let actual = whoWon("rock", "paper");
    let expected = "Player 2 wins!";
    expect(actual).toEqual(expected);
  });

  test("declares player 1 the winner if player 1 chooses 'scissors' and player 2 chooses 'paper'", function () {
    let actual = whoWon("scissors", "paper");
    let expected = "Player 1 wins!";
    expect(actual).toEqual(expected);
  });

  test("declares player 2 the winner if player 1 chooses 'paper' and player 2 chooses 'scissors'", function () {
    let actual = whoWon("paper", "scissors");
    let expected = "Player 2 wins!";
    expect(actual).toEqual(expected);
  });

  test("declares player 1 the winner if player 1 chooses 'rock' and player 2 chooses 'scissors'", function () {
    let actual = whoWon("rock", "scissors");
    let expected = "Player 1 wins!";
    expect(actual).toEqual(expected);
  });

  test("declares player 2 the winner if player 1 chooses 'scissors' and player 2 chooses 'rock'", function () {
    let actual = whoWon("scissors", "rock");
    let expected = "Player 2 wins!";
    expect(actual).toEqual(expected);
  });

  test("declares no winner if either of the players chooses something other than 'paper', 'scissors', or 'rock'", function () {
    let actual = whoWon("banana", "paper");
    let expected = "Hey, you can't do that!";
    expect(actual).toEqual(expected);
  });
});
