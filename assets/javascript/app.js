var correctGuess = 0;
var wrongGuess = 0;
var unanswered = 0;
var number = 10;
var qNum = 0;
var i = 0;
var moveOn;
var intervalId;

var QA = {
    question: [
        "In what city does The Office take place?",
        "Who is Assistant to the Regional Manager?",
        "What is Michael Scott's Middle Name?",
        "Where did Michael get his \"World\'s Best Boss\" mug?",
        "What kind of farm does Dwight own and run?",
        "Who does Jim have a crush on and eventually marry?",
        "What is Michael Scott's name in his movie?",
        "What color does Angela think is \"whore-ish\"?"],

        a1: [
        "Philadelphia",
        "Jim",
        "Gary",
        "Amazon.com",
        "Beet",
        "Merideth",
        "Micheal Scott",
        "Red"],
        a2: [
        "Scranton",
        "Creed",
        "Clark",
        "Spencers",
        "Corn",
        "Pam",
        "James Band",
        "Black"],
        a3: [
        "Columbus",
        "Stanley",
        "Michael",
        "ebay",
        "Wheat",
        "Kelly",
        "Micheal Scarn",
        "Green"],
        a4: [
        "New York",
        "Dwight",
        "John",
        "Goodwill",
        "Soybean",
        "Katy",
        "Jason Barn",
        "Yellow"],

        correctAnswer: [{
            text: "Scranton",
            number: 2
        }, {
            text: "Dwight",
            number: 4
        }, {
            text: "Gary",
            number: 1
        }, {
            text: "Spencers",
            number: 2
        }, {
            text: "Beet",
            number: 1
        }, {
            text: "Pam",
            number: 2
        }, {
            text: "Michael Scarn",
            number: 3
        }, {
            text: "Green",
            number: 3
        }]
};
$(".ans").hide();
$(".playAgain").hide();

function start() {
    stop();
    correctGuess = 0;
    wrongGuess = 0;
    unanswered = 0;
    i=0;
    qNum = 1;
    $(".start").hide();
    $(".playAgain").hide();
    $(".ans").show();
    $(".show-number").show(timer);
    $(".question").show(question);
    $(".one").html(QA.a1[i]);
    $(".two").html(QA.a2[i]);
    $(".three").html(QA.a3[i]);
    $(".four").html(QA.a4[i]);
    $(".correctAns").hide();
    $(".wrongAns").hide();
    $(".unAns").hide();

}

function timer() {
    stop();
        intervalId = setInterval(decrement, 1000);
}

function stop() {
    clearInterval(intervalId);
}

function decrement() {
    number--;
    $(".show-number").html("<h2> Time Left: " + number + "</h2>");
    if (number === 0) {
        unanswered++;
        outOfTime();

    }
}

function nextQuestion() {
    
    if (qNum >= QA.question.length) {
        $(".ans").hide();
        $(".correctAns").show();
        $(".wrongAns").show();
        $(".unAns").show();
        $(".correctAns").html("<h2>Correct Answers: </h2>" + correctGuess);
        $(".wrongAns").html("<h2>Wrong Answers: </h2>" + wrongGuess);
        $(".unAns").html("<h2>Unanswered: </h2>" + unanswered);
        $(".playAgain").show();
        $(".show-number").hide();
        $(".question").hide();
    } 
     else {
    number = 10;
    $(".show-number").html("<h2> Time Left: " + number + "</h2>");
    i++;
    qNum++;
    timer();
    $(".correctAns").hide();
    $(".wrongAns").hide();
    $(".unAns").hide();
    $(".ans").show();
    $(".show-number").show();
    $(".question").show();
    $(".question").html("<h2> Question " + qNum + ": " + QA.question[i] + "</h2>");
    $(".one").html(QA.a1[i]);
    $(".two").html(QA.a2[i]);
    $(".three").html(QA.a3[i]);
    $(".four").html(QA.a4[i]);
     }
}

function question() {
    $(".question").html("<h2> Question " + qNum + ": " + QA.question[i] + "</h2>");
}

$(".ans").on("click", function() {
    stop();
    number = 10;
    var questScore = parseInt($(this).attr("value"));
    console.log(questScore);
    if (questScore === QA.correctAnswer[i].number) {
    correctGuess++;
    console.log("right: " + correctGuess)
    rightAnswer();

    } 
    else {
        wrongGuess++;
        console.log("wrong: " + wrongGuess);
        wrongAnswer();

    }
})

function rightAnswer() {
    $(".show-number").hide();
    $(".question").hide();
    $(".ans").hide();
    $(".correctAns").show();
    $(".correctAns").html("<h2>CORRECT!</h2>");
    $(".wrongAns").hide();
    $(".unAns").show();
    $(".unAns").html("<img src='assets/images/YES.gif'/>");
    setTimeout(nextQuestion, 5000);

}

function wrongAnswer() {
    $(".show-number").hide();
    $(".question").hide();
    $(".ans").hide();
    $(".correctAns").show();
    $(".correctAns").html("<h2>The Correct Answer is: " + QA.correctAnswer[i].text );
    $(".wrongAns").show();
    $(".wrongAns").html("<h2>WRONG!</h2>");
    $(".unAns").show();
    $(".unAns").html("<img src='assets/images/NO.gif'/>");
    setTimeout(nextQuestion, 5000);

}

function outOfTime() {
    $(".show-number").hide();
    $(".question").hide();
    $(".ans").hide();
    $(".correctAns").show();
    $(".correctAns").html("<h2>The Correct Answer is: " + QA.correctAnswer[i].text);
    $(".wrongAns").show();
    $(".wrongAns").html("<h2>OUT OF TIME!</h2>");
    $(".unAns").show();
    $(".unAns").html("<img src='assets/images/TIME.gif'/>");
    setTimeout(nextQuestion, 5000);

}


$(".start").click(start);
$(".playAgain").click(function() {
    start();
});