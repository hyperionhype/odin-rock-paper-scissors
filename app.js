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

let inputPlayer = 'paper';
let playerSelection = inputPlayer.toLowerCase();
let computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		return "it's a tie!";
	} else if (playerSelection === 'rocks' && computerSelection === 'scissors') {
		return 'You Win! Rocks beats Scissors!';
	} else if (playerSelection === 'paper' && computerSelection === 'rocks') {
		return 'You Win! Paper beats Rocks!';
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return 'You Win! Scissors beats Paper!';
	} else if (playerSelection === 'scissors' && computerSelection === 'rocks') {
		return 'You Lose! Rocks beats Scissors';
	} else if (playerSelection === 'rocks' && computerSelection === 'paper') {
		return 'You Lose! Paper beats Rocks!';
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return 'You Lose! Scissors beats Paper!';
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		console.log(playRound(playerSelection, computerPlay())); 
	}
}

game();