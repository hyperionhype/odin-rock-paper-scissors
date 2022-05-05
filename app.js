function computerPlay() {
	const randomItems = Math.floor(Math.random() * 3 + 1);

	if (randomItems === 1) {
		return 'rocks';
	} else if (randomItems === 2) {
		return 'paper';
	} else if (randomItems === 3) {
		return 'scissors';
	}
}

let playerSelection = window.prompt("What's your pick?", 'Rocks or Paper or Scissors').toLowerCase();
let computerSelection = computerPlay();

let win = 'You Win!';
let lose = 'You Lose!';
let tie = "It's a tie!";
let playerScore = 0;
let computerScore = 0;
let gameWinner = '';

function gameWin() {
	if (playerScore > computerScore) {
		gameWinner = 'You Win!';
		return gameWinner;
	} else if (playerScore < computerScore) {
		gameWinner = 'Computer Wins!';
		return gameWinner;
	}
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return `${tie}`;
	} else if (playerSelection === 'rocks' && computerSelection === 'scissors') {
		playerScore++;
		return `${win}, Rocks beats Scissors!`;
	} else if (playerSelection === 'paper' && computerSelection === 'rocks') {
		playerScore++;
		return `${win}, Paper beats Rocks!`;
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		playerScore++;
		return `${win} Scissors beats Paper!`;
	} else if (playerSelection === 'scissors' && computerSelection === 'rocks') {
		computerScore++;
		return `${lose} Rocks beats Scissors`;
	} else if (playerSelection === 'rocks' && computerSelection === 'paper') {
		computerScore++;
		return `${lose} Paper beats Rocks!`;
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		computerScore++;
		return `${lose}, Scissors beats Paper!`;
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerSelection, computerPlay()));
		window.prompt("What's your pick?", 'Rocks or Paper or Scissors');
	}
	console.log('Player Score', playerScore);
	console.log('Computer Score', computerScore);
	console.log(gameWin());
}

game();
