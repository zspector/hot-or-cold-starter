
$(document).ready(function(){
	var answer;
	newGame();
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
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

function guess(i) {
	//Change feedback depending on proximity
	//Append li with input onto #guesslist
	//Change #count content
}