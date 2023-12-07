//here we get back the stored score and we un stringyfy it
//this is an even faster shortcut then the one bellow if lest side is false then do right side aka what is after ||
//default operator in work
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();
// the ! checks if score has a false value in this case null shortcut for score === null
/*
      if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0,
        };
      }
      */

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose.';
    } else if (computerMove === 'Paper') {
      result = 'You Win.';
    } else if (computerMove === 'Scissors') {
      result = 'Tie.';
    }
  } else if (playerMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win.';
    } else if (computerMove === 'Paper') {
      result = 'Tie.';
    } else if (computerMove === 'Scissors') {
      result = 'You lose.';
    }
  } else if (playerMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie.';
    } else if (computerMove === 'Paper') {
      result = 'You lose.';
    } else if (computerMove === 'Scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  } else if (result === 'You lose.') {
    score.losses += 1;
  } else if (result === 'Tie.') {
    score.ties += 1;
  }

  /*this code lets us store a score for later we need to use json because it only takes strings
        so we use JSON to make it a string */
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You 
        <img class="move-icon" src="images-game/${playerMove}-emoji.png">
        <img class="move-icon" src="images-game/${computerMove}-emoji.png">
      Computer`;
}

function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'Rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'Paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'Scissors';
  }

  return computerMove;
}
