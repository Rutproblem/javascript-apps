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
        
    })

}