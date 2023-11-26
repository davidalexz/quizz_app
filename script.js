const quizData = [
    {
        question: "What is the name of Harry Potter's owl?",
        d: 'Hedwig',
        a: 'Crookshanks',
        b: 'Pigwidgeon',
        c: 'Errol',
    },
    {
        question: 'Who is the Half-Blood Prince?',
        d: 'Severus Snape',
        a: 'Remus Lupin',
        b: 'Sirius Black',
        c: 'Peter Pettigrew',
    },
    {
        question: 'What is the name of the Weasley twins?',
        d: 'Fred and George',
        a: 'Charlie and Bill',
        b: 'Percy and Ron',
        c: 'Arthur and Fred',
    },
    {
        question: 'Which house did the Sorting Hat originally consider putting Harry in?',
        d: 'Slytherin',
        a: 'Hufflepuff',
        b: 'Ravenclaw',
        c: 'Gryffindor',
    },
    {
        question: 'Who is the headmaster of Hogwarts throughout most of the series?',
        d: 'Albus Dumbledore',
        a: 'Minerva McGonagall',
        b: 'Severus Snape',
        c: 'Remus Lupin',
    },
    {
        question: "What is the form of Hermione Granger's Patronus?",
        d: 'An otter',
        a: 'A cat',
        b: 'A bird',
        c: 'A dog',
    },
    {
        question: 'What magical object allows someone to transform into another person?',
        d: 'Polyjuice Potion',
        a: 'Felix Felicis',
        b: 'Veritaserum',
        c: 'Amortentia',
    },
    {
        question: 'What are the three kinds of balls used in Quidditch?',
        d: 'Quaffle, Bludgers, Golden Snitch',
        a: 'Quaffle, Beaters, Golden Snitch',
        b: 'Bludgers, Snitch, Quaffle',
        c: 'Quaffle, Beaters, Bludgers',
    },
    {
        question: "Who is the author of 'Fantastic Beasts and Where to Find Them'?",
        d: 'Newt Scamander',
        a: 'Gilderoy Lockhart',
        b: 'Rubeus Hagrid',
        c: 'Newton Artemis Fido Scamander',
    },
    {
        question:
            "What is the name of the village where Harry's parents lived and where he defeated Voldemort?",
        d: "Godric's Hollow",
        a: 'Hogsmeade',
        b: 'Diagon Alley',
        c: 'Little Whinging',
    },
    // ... more questions
];

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;

    currentQuiz.currentQuiz++;
}
