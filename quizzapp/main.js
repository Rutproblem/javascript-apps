const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hypertext Markup Language",
            "High Text Machine Learning",
            "Hyperlink Tool Markup  Language"
        ],
        correct: 0
    },

    {
        question: "Which symbol is used for comments in Javacript?",
        answers: [
            "//",
            "<!-- -->",
            "**"
        ],
        correct: 0
    },

    {
        question: "Which company created Javascript?",
        answers: [
            "Microsoft",
            "Netscape",
            "Google"
        ],
        correct: 1
    },
];

// DOM ELEMENTS
let currentQuestion = 0;
let score = 0;
let animationOverlay = document.getElementById('animationOverlay');
let animationIcon = document.getElementById('animationIcon');
let animationText = document.getElementById('animationText');
let questionEl = document.getElementById('question');
let answersEl = document.getElementById('answers');
let progressEl = document.getElementById('progress');

function showQuestion() {
    const q = questions[currentQuestion];

    questionEl.innerText = q.question;
    answersEl.innterHTML = "";

    q.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = "btn btn-outline-info";
        button.innerText = answer;

        button.addEventListener('click', () => {
            checkAnswer(index);
        })

        answersEl.appendChild(button);
    });

    progressEl.innerText = `Question ${currentQuestion + 1} of ${questions.length}`;
}

function showAnimation(isCorrect) {
    if(isCorrect) {
        animationText.innerText = "Correct answer!";
        animationText.className = "correctText!";
        animationIcon.innerText = "✅";
    }
    else {
        animationText.innerText = "Wrong answer!";
        animationText.className = "wrongText!";
        animationIcon.innerText = "❌";
    }

    animationOverlay.classList.add('show');

    setTimeout(() => {
        animationOverlay.classList.remove('show');
    }, 3000);
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestion].correct;
    const isCorrect = selectedIndex === correctIndex;

    if(isCorrect) {
        score++;
    }

    showAnimation(isCorrect);

    setTimeout(() => {
        currentQuestion++;

        if(currentQuestion < questions.length) {
            showQuestion();
        }
        else {
            showResult();
        }
    },  3000);
}

function showResult() {
    questionEl.innerText = `🎉Congrats, your score is: ${score} / ${questioins.length}🎉`;
    answersEl.innerHTML = "";
    progressEl.innerText = "";

    const restartBtn = document.createElement('button');
    restartBtn.className = "btn btn-success mt-3";
    restartBtn.innerText = "Restart quiz";

    restartBtn.addEventListener('click', restartQuiz);

    answersEl.appendChild(restartBtn);
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    showQuestion();
}

showQuestion();