$("#quiz").hide();
$("#result").hide();
$("#timer").hide();

function setTimer(){

	var timeLeft = 30;
	
	var timerId = setInterval(countdown, 1000);

	function countdown() {
		if (timeLeft == 0) {
			clearTimeout(timerId);
			check();
		} else {
			timeLeft--;
			$("#clock").html(timeLeft)
		}
	}
}

function start() {
	$("#result").hide();
	$("#start-btn").hide();
	$("#quiz").show();
	$("#timer").show();
	setTimer();
		
}

function check() {
	var correct = 0;
	var wrong = 0;
	var anwserOne = document.quiz.answers1.value;
	var anwserTwo = document.quiz.answers2.value;
	var anwserThree = document.quiz.answers3.value;
	var anwserFour = document.quiz.answers4.value;
	var anwserFive = document.quiz.answers5.value;

	if ( anwserOne == "D" ) {
		console.log("1correct");
		correct++;

	} else {
		console.log("1wrong");
		wrong++;
	}

	if ( anwserTwo == "B" ) {
		console.log("2correct");
		correct++;

	} else {
		console.log("2wrong");
		wrong++;
	}

	if ( anwserThree == "A" ) {
		console.log("3correct");
		correct++;

	} else {
		console.log("3wrong");
		wrong++;
	}

	if ( anwserFour == "D" ) {
		console.log("4correct");
		correct++;

	} else {
		console.log("4wrong");
		wrong++;
	}

	if ( anwserTwo == "B" ) {
		console.log("5correct");
		correct++;

	} else {
		console.log("5wrong");
		wrong++;
	}

	$("#correct").html(correct);
	$("#wrong").html(wrong);

	$("#quiz").hide();
	$("#result").show();
	$("#timer").hide();
	setTimer();

}