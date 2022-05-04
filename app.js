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