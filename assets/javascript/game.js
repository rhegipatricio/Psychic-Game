


			//These are the variables
			var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
			var wins = 0;
			var losses = 0;
			var guessesLeft = 10;
			var soFar = [];
			var newLetter = alphabet[Math.floor(Math.random() * alphabet.length)];


			//var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

			//when the user presses the key, it'll run the function event
			document.onkeyup=function (event) {
			var userGuess = event.key;
			console.log ("user guess ", userGuess, "computer guess ", computerGuess);
			//If a user's guess equals the computer's guess, the win counter will go up one
			if (userGuess === computerGuess) {
			wins++;
			console.log ("WIN!");
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			}
			//If a user's guess does not equal the computer's guess, the loss counter will go up one
			if (userGuess != computerGuess) {
			losses++;
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log ("computerGuess ", computerGuess)			
			console.log ("LOSER!")	
			}

			//If guesses do not equal to 0, the number of guesses go down by one
			if (guessesLeft != 0) {
			guessesLeft --;

			//The console will log the number of guesses left
			console.log ("guessesLeft", guessesLeft)
			}
		}

	/*Code Tried
	Computer generates a random letter
	function newLetter() {
		var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		guessesLeft=10
	}

	calling function
	newLetter ();*/

 	/*When user guesses (if they get it right or not)
	document.onkeyup = function (event){
			var userGuess = event.key;
			console.log (event.key);
		if (userGuess === computerGuess) {
			wins++;
		
		//newLetter ();
		}
		
	if (guessesLeft != 0) {
			guessesLeft--;
		}
		}

	soFar, textContent == event.key +", ";
	

	soFar = document.getElementByID("soFar");
	console.log(userGuess);
	for (var i = 0; i < answer.length i++) {}


 	If the user guess is the same as the computer guess
	(userGuess === computerGuess) {
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
	} 


	else (computerGuess) {
		guessesLeft--;
		document.getElementById("guessCount").innerHTML = guessesLeft;
	console.log(computerGuess);
		
