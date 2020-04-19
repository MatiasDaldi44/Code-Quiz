var quizBody = $("#quizBody")
var startButton = $("#startButton")
var buttonGrid = $("#buttonGrid")
var timeClock = $("#timeClock")
var insertScoreDiv = $("#insertScoreDiv")
var initialsForm = $("#initials-form")
var initialsInput = $("#initials")
var secondsLeft = 75;
var initials = [];
var finalScore = [];

removePrompt()

startButton.on("click", startGame)

function removePrompt() {
    insertScoreDiv.hide()
}

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeClock.text("Time: " + secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval)
            timeClock.text() = "Time: 0"
        }
    }, 1000);
}

function startGame() {
    setTime()
    startButton.remove();
    quizBody.text("Commonly used data types DO NOT include:");
    var answers = [
        "Strings", 
        "Booleans", 
        "Alerts", 
        "Numbers"
    ];
    for (var i = 0; i < answers.length; i++) {
        var newButton = $("<button>");
        newButton.text(answers[i]);
        newButton.addClass("answerBtns")
        newButton.attr("dataset", answers[i])
        $("#buttonGrid").append(newButton)
    };
    $(".answerBtns").on("click", function(event) {
        var value; 
        switch ( $("button").index(this)) {
            case 0:
                value = 1;
                break;
            case 1:
                value = 2;
                break;
            case 2:
                value = 3;
                break;
            case 3:
                value = 4;
                break;
        }
        if (value === 3) {
            $("#buttonGrid").empty()
            secondQuestion()
        } else {
            // remove 10 seconds
        }
    })
}

function secondQuestion() {
    quizBody.text("The condition in an if/else statement is enclosed with _______.");
    var answers = [
        "Quotes", 
        "Curly Brackets", 
        "Parentheses", 
        "Square Brackets"
    ];
    for (var i = 0; i < answers.length; i++) {
        var newButton = $("<button>");
        newButton.text(answers[i]);
        newButton.addClass("answerBtns")
        newButton.attr("dataset", answers[i])
        $("#buttonGrid").append(newButton)
    };
    $(".answerBtns").on("click", function(event) {
        var value; 
        switch ( $("button").index(this)) {
            case 0:
                value = 1;
                break;
            case 1:
                value = 2;
                break;
            case 2:
                value = 3;
                break;
            case 3:
                value = 4;
                break;
        }
        if (value === 3) {
            $("#buttonGrid").empty()
            thirdQuestion()
        } else {
            // remove 10 seconds
        }
    })
}

function thirdQuestion() {
    quizBody.text("Arrays in JavaScript can be used to store _______.");
    var answers = [
        "Numbers and Strings", 
        "Other Arrays", 
        "Booleans", 
        "All of the Above"
    ];
    for (var i = 0; i < answers.length; i++) {
        var newButton = $("<button>");
        newButton.text(answers[i]);
        newButton.addClass("answerBtns")
        newButton.attr("dataset", answers[i])
        $("#buttonGrid").append(newButton)
    };
    $(".answerBtns").on("click", function(event) {
        var value; 
        switch ( $("button").index(this)) {
            case 0:
                value = 1;
                break;
            case 1:
                value = 2;
                break;
            case 2:
                value = 3;
                break;
            case 3:
                value = 4;
                break;
        }
        if (value === 4) {
            $("#buttonGrid").empty()
            fourthQuestion()
        } else {
            // remove 10 seconds
        }
    })
}

function fourthQuestion() {
    quizBody.text("String values must be enclosed withing _______ when being assigned to variables.");
    var answers = [
        "Commas", 
        "Curly Brackets", 
        "Quotes", 
        "Parentheses"
    ];
    for (var i = 0; i < answers.length; i++) {
        var newButton = $("<button>");
        newButton.text(answers[i]);
        newButton.addClass("answerBtns")
        newButton.attr("dataset", answers[i])
        $("#buttonGrid").append(newButton)
    };
    $(".answerBtns").on("click", function(event) {
        var value; 
        switch ( $("button").index(this)) {
            case 0:
                value = 1;
                break;
            case 1:
                value = 2;
                break;
            case 2:
                value = 3;
                break;
            case 3:
                value = 4;
                break;
        }
        if (value === 3) {
            $("#buttonGrid").empty()
            fifthQuestion()
        } else {
            // remove 10 seconds
        }
    })
}

function fifthQuestion() {
    quizBody.text("A very useful tool used during the development and debuggin for printing content to the debugger is:");
    var answers = [
        "JavaScript", 
        "Terminal/Bash", 
        "For Loops", 
        "console.log"
    ];
    for (var i = 0; i < answers.length; i++) {
        var newButton = $("<button>");
        newButton.text(answers[i]);
        newButton.addClass("answerBtns")
        newButton.attr("dataset", answers[i])
        $("#buttonGrid").append(newButton)
    };
    $(".answerBtns").on("click", function(event) {
        var value; 
        switch ( $("button").index(this)) {
            case 0:
                value = 1;
                break;
            case 1:
                value = 2;
                break;
            case 2:
                value = 3;
                break;
            case 3:
                value = 4;
                break;
        }
        if (value === 4) {
            $("#buttonGrid").empty()
            timeClock.remove()
            insertScore()
        } else {
            // remove 10 seconds
        }
    })
}

function insertScore() {
    $("#header").text("All Done!")
    insertScoreDiv.show()
    var finalScore = secondsLeft
    quizBody.text("Your final score is: " + finalScore)

    initialsForm.on("submit", function(event) {
        event.preventDefault();
        var initialsText = initialsForm.value;
        if (initialsText === "") {
            return;
        }
        initials.push(initialsText);
        initialsForm.value = "";
        localStorage.setItem("initials", JSON.stringify(initials));
        localStorage.setItem("scores", JSON.stringify(finalScore));
    })
}