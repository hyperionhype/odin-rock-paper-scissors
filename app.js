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

let inputPlayer = window.prompt("What's your pick?", 'Rocks or Paper or Scissors');
let playerSelection = inputPlayer.toLowerCase();
let computerSelection = computerPlay();

let win = 'You Win!';
let lose = 'You Lose!';
let tie = "It's a tie!";

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return `${tie}`;
	} else if (playerSelection === 'rocks' && computerSelection === 'scissors') {
		return `${win}, Rocks beats Scissors!`;
	} else if (playerSelection === 'paper' && computerSelection === 'rocks') {
		return `${win}, Paper beats Rocks!`;
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return `${win} Scissors beats Paper!`;
	} else if (playerSelection === 'scissors' && computerSelection === 'rocks') {
		return `${lose} Rocks beats Scissors`;
	} else if (playerSelection === 'rocks' && computerSelection === 'paper') {
		return `${lose} Paper beats Rocks!`;
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return `${lose}, Scissors beats Paper!`;
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerSelection, computerPlay()));
		window.prompt("What's your pick?", 'Rocks or Paper or Scissors');
	}
	if (playerSelection === undefined) {
		inputPlayer;
	}
}

game();
