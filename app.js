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
//variable global scope ALWAYS PUT HERE FOR EASY SEARCH!
let computerSelection = '';
let playerSelection = '';
let playerInput;
let compInput;
let win = 'You Win!'; // for playRound()
let lose = 'You Lose!'; // for playRound()
let tie = "It's a tie!"; // for playRound()
let playerScore = 0; // value change on playRound()
let computerScore = 0; // value change on playRound()
let whoWin = ''; // value change on gameWinner()
let round = 0; // value change on game()

function playRound(playerSelection, computerSelection) {
	computerSelection = computerPlay();
	playerSelection = window.prompt("What's your pick?", 'Rocks or Paper or Scissors').toLowerCase();
	playerInput = playerSelection;
	compInput = computerSelection;
	if (playerSelection === computerSelection) {
		return `${tie} You both pick ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)}!`;
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

function gameWinner() {
	if (playerScore > computerScore) {
		whoWin = 'You Win!';
		return whoWin;
	} else if (playerScore < computerScore) {
		whoWin = 'Computer Wins!';
		return whoWin;
	} else if (playerScore === computerScore) {
		whoWin = 'No one wins!';
		return whoWin;
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		round++;
		console.log(`Round ${round}`);
		console.log(playRound(playerSelection, computerSelection));
	}
	console.log(`Final Score: ${playerScore} - ${computerScore}`);
	console.log(gameWinner());
}

game();

//for checking input
// console.log(`You pick ${playerInput} - Computer pick ${compInput}`);
