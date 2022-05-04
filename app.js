function computerPlay() {
	const randomItems = Math.floor(Math.random() * 3 + 1);

	if (randomItems === 1) {
		return 'Rocks';
	} else if (randomItems === 2) {
		return 'Paper';
	} else if (randomItems === 3) {
		return 'Scissors';
	}
}
console.log(computerPlay());

let inputPlayer = 'Paper';
let playerSelection = inputPlayer.toLowerCase();
let computerSelection = computerPlay().toLowerCase();

function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rocks' && computerSelection === 'rocks') {
		return "it's a tie!";
	} else if (playerSelection === 'paper' && computerSelection === 'paper') {
		return "It's a tie!";
	} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
		return "It's a tie!";
	} else if (playerSelection === 'rocks' && computerSelection === 'scissors') {
		return 'You Win! Rocks beats Scissors!';
	} else if (playerSelection === 'paper' && computerSelection === 'rocks') {
		return 'You Win! Paper beats Rocks!';
	} else if (playerSelection === 'scissors' && computerSelection === 'rocks') {
		return 'You Win! Scissors beats Paper!';
	} else if (playerSelection === 'scissors' && computerSelection === 'rocks') {
		return 'You Lose! Rocks beats Scissors';
	} else if (playerSelection === 'rocks' && computerSelection === 'paper') {
		return 'You Lose! Paper beats Rocks!';
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return 'You Lose! Scissors beats Paper!';
	}
}
