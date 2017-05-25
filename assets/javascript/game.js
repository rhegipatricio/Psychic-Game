	


			//These are the variables
			var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
			var wins = 0;
			var losses = 0;
			var guessesLeft = 10;
			var soFar = [];
			var computerGuess = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

			//Computer pulls a random number
			var computerGuess = options[Math.floor(Math.random() * alphabet.length)];
    		console.log('computerGuess' + computerGuess);

			//When the user presses the key, it'll run the function event
			document.onkeyup=function (event) {
			var userGuess = event.key;
			console.log ("user guess ", userGuess, "computer guess ", computerGuess);
			//If a user's guess equals the computer's guess, the win counter will go up one
			if (userGuess === computerGuess) {
			wins++;
			console.log ("Professor X is proud!");
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			}
			//If a user's guess does not equal the computer's guess, the loss counter will go up one
			if (userGuess != computerGuess) {
			losses++;
			computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
			console.log ("computerGuess ", computerGuess)			
			console.log ("Jean Grey is still smarter than you!")	
			}

			//If guesses do not equal to 0, the number of guesses go down by one
			if (guessesLeft != 0) {
			guessesLeft --;

			//The console will log the number of guesses left
			console.log ("guessesLeft", guessesLeft)
			}

			//If guesses have been repeated, an alert shows up
			if (userGuess === computerguess) {
				alert ("Please choose a different letter")
			}
		}

			//Referencing <span> in html
			var wins = document.getElementsByID('wins'), 
				losses = document.getElementsByID('losses'),
		




		/*Pseudocode
		 Game starts by computer picking a random letter from the alphabet
		 User tries to guess one of the 26 letters
		 If user's guess equals to the computer's original guess, the user gets a point
		 If user's guess doesn't equal to the computer's guess, the losses count will go up
		 game ends when 


	/*Below is Code Tried, but failed
	Computer generates a random letter
	function newLetter() {
		var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
		guessesLeft=10
	}

	/*var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
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
		
