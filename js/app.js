
$(document).ready(function(){
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
		$("#guessButton").click(function(event) {
			submitGuess(event);
			$('#userGuess').focus();
		})
		.keyup(function(event) {
			if (event.keyCode === 13) {
				submitGuess();
			}
		});
});
var answer = 0;
var count = 0;
var guess = 0;
var guessArray = [];

function newGame() {
	answer = randNum();
	console.log(answer);
	//Reset #feedback to "Make your Guess!"
	$('#feedback').text("Make your Guess!");
	//Empty #guesslist
	$("#guessList").empty();
	//Reset #count to 0
	count = 0;
	$("#count").text(count);
	guessArray = [];
}

function randNum() {
	return Math.floor(Math.random() * 101);
}

function addCount() {
	count++;
	$('#count').text(count);
}

function addGuess() {
	
	$('#guessList').append('<li>' +guess+ '</li>');
	$('#userGuess').val('');
}

function feedback() {
	var temp = Math.abs(guess - answer);
	var feedback = $('#feedback')
	if (guess === answer) {
		feedback.text("You got it!");
	} else if (temp >= 1 && temp <= 5) {
		feedback.text("Burning!");
	} else if (temp <= 10) {
		feedback.text("Very hot");
	} else if (temp <= 15) {
		feedback.text("Hot");
	} else if (temp <= 20) {
		feedback.text("Warm");
	} else if (temp <= 30) {
		feedback.text("Cold");
	} else if (temp <= 40) {
		feedback.text("Very cold");
	} else {
		feedback.text("Freezing!");
	}
}

function pastGuess() {
		guessArray.push(guess);
}

function submitGuess(event) {
	event.preventDefault();
	guess = +$('#userGuess').val();
	if (guessArray.indexOf(guess) === -1 && guess > 0 && guess < 101 && guess % 1 === 0) {
		pastGuess();
		feedback();
		addGuess();
		addCount();
	} else if (guessArray.indexOf(guess) != -1) {
		alert("You already guessed that number!");
		$('#userGuess').val('');
	} else {
		alert("Please choose a valid number between 1 and 100");
		$('#userGuess').val('');
	}
}