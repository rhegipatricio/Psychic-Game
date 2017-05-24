<script type="text/javascript">


	//These are the variables
	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
	var wins = 0;
	var losses = 0;
	var guessesLeft = 10;
	var soFar = [];

 	//
	document.onkey = function (event){
	var userGuess = event.key;
	soFar, textContent == event.key +", ";

	soFar = document.getElementByID("soFar");
	console.log(userGuess);

	//This is for the computer guessing
	for (var i = 0; i < answer.length i++) {
		var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	}


 	// If the user guess is the same as the computer guess
	if (userGuess === computerGuess) {
	wins++;
	guessesLeft = 9;
	document.getElementByID('left').innerHTML = win;
	document.getElementByID('wins').innerHTML = win;
}	else {
		guessesLeft--;
	document.getElementById('left').innerHTML = left;
}
	
	if (left === 0){
		loss++;
	document.getElementById('losses').innerHTML = loss;
		guessesLeft = 9;
	document.getElementByID('left').innerHTML = win;
}
	} else {
		guessesLeft==;
		document.getElementById("guessCount")=innerHTML = guessesLeft;
	console.log(computerGuess);



 	//
 	//



</script>