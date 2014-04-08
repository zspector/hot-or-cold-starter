
$(document).ready(function(){
	var answer;
	newGame();
	$('.new').click(function() {
		newGame();
	});
	/*--- Display information modal box ---*/
		$(".what").click(function(){
			$(".overlay").fadeIn(1000);

		});

		/*--- Hide information modal box ---*/
		$("a.close").click(function(){
			$(".overlay").fadeOut(1000);
		});

		/*--- Game play functions ---*/
		$("#userButton").click(function() {
			submitGuess();
		});
});

function newGame() {
	console.log(randNum());
	answer = randNum();
	//Reset #feedback to "Make your Guess!"
	//Empty #guesslist
	//Reset #count to 0
}

function randNum() {
	return Math.floor(Math.random() * 101);
}

function submitGuess() {
	var guess = +$('#userGuess').val();
	if (guess%1 === 0 && guess > 0 && guess < 101) {
		//Change feedback depending on proximity
		var temp = Math.abs(guess - answer);
		var feedback = $('#feedback');
		if (guess === answer) {
			feedback.text("You got it!");
		} else if (temp >= 1 && temp <= 5) {
			feedback.text("Burning!");
		} else if (temp >= 6 && temp <= 10) {
			feedback.text("Very hot");
		} else if (temp >= 11 && temp <= 15) {
			feedback.text("Hot");
		} else if (temp >= 16 && temp <= 20) {
			feedback.text("Warm");
		} else if (temp >= 21 && temp <= 30) {
			feedback.text("Cold");
		} else if (temp >= 31 && temp <= 40) {
			feedback.text("Very cold");
		} else {
			feedback.text("Freezing!");
		}
		//Append li with input onto #guesslist
		$('#guessList').append('<li>' +guess+ '</li>');
		//Change #count content
		var count = 0;
		count++;
		$('#count').text(count);
	}
}