//variable global scope ALWAYS PUT HERE FOR EASY SEARCH!
let computerSelection = '';
let playerSelection = '';
let playerInput;
let compInput;
let playerScore = 0; // value change on playRound()
let computerScore = 0; // value change on playRound()
let whoWin = ''; // value change on gameWinner()
let round = 0; // value change on game()
let finalScore = ''; // value change on final score()

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

function playRound(playerSelection, computerSelection) {
	//variable list
	let win = 'You Win!';
	let lose = 'You Lose!';
	let tie = "It's a tie!";
	computerSelection = computerPlay();
	playerSelection = window.prompt("What's your pick?", 'Rocks or Paper or Scissors').toLowerCase();
	playerInput = playerSelection;
	compInput = computerSelection;
	//end of variable list
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

function finaleScore() {
	if (playerScore > computerScore) {
		finalScore = 'For the Player!';
		return finalScore;
	} else if (playerScore < computerScore) {
		finalScore = 'For the Computer!';
		return finalScore;
	} else if (playerScore === computerScore) {
		finalScore = 'For Both Side!';
		return finalScore;
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
		round++; // add 1 value every time  playRound()  gets call
		console.log(`Round ${round}`); //checking round
		console.log(playRound(playerSelection, computerSelection));
		console.log(`Current score Player ${playerScore} - Comp ${computerScore}`);
		console.log(`(Input check = You pick ${playerInput} - Computer pick ${compInput})`); //for checking input
		console.log('--------'); //separator for each round
	}
	console.log(`Final Score: ${playerScore} - ${computerScore} ${finaleScore()}`);
	console.log(gameWinner());

	if (playerScore === computerScore) {
		console.log("Let's go for second game! We need winner to end this loop!");
		game();
	}
}

game();
