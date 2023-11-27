const quizData = [
    {
        question: "What is the name of Harry Potter's owl?",
        d: 'Hedwig',
        a: 'Crookshanks',
        b: 'Pigwidgeon',
        c: 'Errol',
        correct: 'd',
    },
    {
        question: 'Who is the Half-Blood Prince?',
        d: 'Severus Snape',
        a: 'Remus Lupin',
        b: 'Sirius Black',
        c: 'Peter Pettigrew',
        correct: 'd',
    },
    {
        question: 'What is the name of the Weasley twins?',
        d: 'Fred and George',
        a: 'Charlie and Bill',
        b: 'Percy and Ron',
        c: 'Arthur and Fred',
        correct: 'd',
    },
    {
        question: 'Which house did the Sorting Hat originally consider putting Harry in?',
        d: 'Slytherin',
        a: 'Hufflepuff',
        b: 'Ravenclaw',
        c: 'Gryffindor',
        correct: 'd',
    },
    {
        question: 'Who is the headmaster of Hogwarts throughout most of the series?',
        d: 'Albus Dumbledore',
        a: 'Minerva McGonagall',
        b: 'Severus Snape',
        c: 'Remus Lupin',
        correct: 'd',
    },
    {
        question: "What is the form of Hermione Granger's Patronus?",
        d: 'An otter',
        a: 'A cat',
        b: 'A bird',
        c: 'A dog',
        correct: 'd',
    },
    {
        question: 'What magical object allows someone to transform into another person?',
        d: 'Polyjuice Potion',
        a: 'Felix Felicis',
        b: 'Veritaserum',
        c: 'Amortentia',
        correct: 'd',
    },
    {
        question: 'What are the three kinds of balls used in Quidditch?',
        d: 'Quaffle, Bludgers, Golden Snitch',
        a: 'Quaffle, Beaters, Golden Snitch',
        b: 'Bludgers, Snitch, Quaffle',
        c: 'Quaffle, Beaters, Bludgers',
        correct: 'd',
    },
    {
        question: "Who is the author of 'Fantastic Beasts and Where to Find Them'?",
        d: 'Newt Scamander',
        a: 'Gilderoy Lockhart',
        b: 'Rubeus Hagrid',
        c: 'Newton Artemis Fido Scamander',
        correct: 'd',
    },
    {
        question:
            "What is the name of the village where Harry's parents lived and where he defeated Voldemort?",
        d: "Godric's Hollow",
        a: 'Hogsmeade',
        b: 'Diagon Alley',
        c: 'Little Whinging',
        correct: 'd',
    },
    // ... more questions
];

const quiz = document.getElementById('quiz');

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

const submitBtn = document.getElementById('submit');
const getAnswer = document.querySelectorAll('.answer');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deSelect();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    currentQuiz.currentQuiz++;
}

function getSelected() {
    let answer = undefined;
    getAnswer.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deSelect() {
    getAnswer.forEach((answerEl) => (answerEl.checked = false));
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answer correctly ${score} questions out of ${quizData.length} </h2>`;
        }
    }
});
