var quizBody = document.querySelector(".quizBody")
var startButton = document.querySelector("#startButton")
var buttonGrid = document.querySelector(".buttonGrid")

let questionRandomizer, currentQuestion

startButton.addEventListener("click", startGame)

function startGame() {
    startButton.classList.add("hide");
    questionRandomizer = questions.sort(() => Math.random() - .5);
    buttonGrid.classList.remove("hide");
    currentQuestion = 0;
    nextQuestion()
}

function nextQuestion() {
    showQuestion(questionRandomizer[currentQuestion])
}

function showQuestion(question) {
    quizBody.innerHTML = question.question
    question.answers.forEach(answers => {
        var button = document.createElement("button")
        button.textContent = answers.text
        button.classList.add("answerBtns")
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener("click", selectAnswer)
        buttonGrid.appendChild(button)
    });
}

function selectAnswer() {

}

var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            { text: "Strings", correct: false},
            { text: "Booleans", correct: false},
            { text: "Alerts", correct: true},
            { text: "Numbers", correct: false}
        ]
    },
    {
        question: "The condition in an if/else statement is enclosed with _______.",
        answers: [
            { text: "Quotes", correct: false},
            { text: "Curly Brackets", correct: false},
            { text: "Parentheses", correct: true},
            { text: "Square Brackets", correct: false}
        ]
    },
    {
        question: "Arrays in JavaScript can be used to store ______.",
        answers: [
            { text: "Numbers and Strings", correct: false},
            { text: "Other Arrays", correct: false},
            { text: "Booleans", correct: false},
            { text: "All of the above", correct: true}
        ]
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: [
            { text: "Commas", correct: false},
            { text: "Curly Brackets", correct: false},
            { text: "Quotes", correct: true},
            { text: "Parentheses", correct: false}
        ]
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: [
            { text: "JavaScript", correct: false},
            { text: "Terminal/Bash", correct: false},
            { text: "For Loops", correct: false},
            { text: "console.log", correct: true}
        ]
    },
]