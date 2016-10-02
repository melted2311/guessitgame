
//1-need a secret number --> math 06; 11 12
var secretNumero = Math.floor((Math.random() * 100) + 1)
console.log(secretNumero)
//number of guesses
var userGuesses = 1

//number of tries
var userTry = 0

//2-get user data --> prompt or form
//Number(prompt("Choose a number from 1 - 100"))
 function showGuess(){
 var userGuess = document.getElementById("userGuess")
 var outCome = document.getElementById("outCome")

// 	// stop function if input is not correct or to small or to big
	if (!userGuess.value || userGuess.value > 100 || userGuess.value < 0) {
		// add a class of success to results
		outCome.className = "failure"
		// update the text content of results
		outCome.textContent = "incorrect input, please try again"
		// clears input tag out
		userGuess.value = ""
		// stop function to allow user to try again
		return
	}

	// if user guesses the secret number correctly
	if(userGuess.value == secretNumero) {
		// add a class of success to results
		outCome.className = "success"
		// update the text content of results
		outCome.textContent = "Congrats, You won! got it in " + (userTry + 1) + " guesses!"
		return
	// otherwise check if the guess is greater than the secret number
	} else if(userGuess.value > secretNumero) {
		// add a class of failure to results
		outCome.className = "failure"
		// update the content of results
		outCome.textContent = "Guess a lower number"
		// refocus on input for user
		userGuess.focus()
	// otherwise the guess is less than the secret number
	} else {
		// add a class of failure to results
		outCome.className = "failure"
		// update the content of results
		outCome.textContent = "Guess a higher number"
		// refocus on input for user
		userGuess.focus()
	}


	// clears input tag out
	userGuess.value = ""
	
	// increment guess counter
	userTry = userTry + 1

	// stop game if out of guesses
	if(userTry >= 10){
		// add a class of success to results
		outCome.className = "failure"
		// update the text content of results
		outCome.textContent = "Sorry you're out of guesses, refresh to play again"

		// remove onclick attribute if user runs out of guesses
		document.getElementById('btn').onclick = null;
	}
}

