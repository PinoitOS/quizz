const questions = [
    {
        question: "¿Cuántas bares tienen las botellas de buceo como MÁXIMO?",
        answers: ["2000", "20", "200", "Ninguno abraham se los fuma"],
        correct: 2
    },
    {
        question: "¿Qué animales puedo ver en el fondo del mar?",
        answers: ["Tropicales", "Pese", "Tigres y Osos", "Elufantes"],
        correct: 2
    },
    {
        question: "¿Cómo se llama el mono que acompaña a Dora la exploradora mamadora?",
        answers: ["Suaiper", "Juakinete", "Er javi", "Fernandu"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    window.location.href = 'quiz.html';
}

function submitAnswer() {
    const selected = document.querySelector('input[name="answer"]:checked');
    if (selected) {
        if (parseInt(selected.value) === questions[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            finishQuiz();
        }
    } else {
        alert('Por favor, selecciona una respuesta.');
    }
}

function loadQuestion() {
    document.getElementById('question-number').innerText = currentQuestion + 1;
    document.getElementById('question-text').innerText = questions[currentQuestion].question;
    const answers = document.querySelectorAll('input[name="answer"] + label');
    answers.forEach((label, index) => {
        label.innerText = questions[currentQuestion].answers[index];
    });
    document.querySelector('input[name="answer"]:checked').checked = false; // Desmarcar la respuesta seleccionada
}

function finishQuiz() {
    window.location.href = 'result.html';
}

window.onload = function() {
    if (window.location.pathname.endsWith('quiz.html')) {
        loadQuestion();
    }
    if (window.location.pathname.endsWith('result.html')) {
        document.getElementById('lock-code').innerText = '🔒 027';
    }
};
