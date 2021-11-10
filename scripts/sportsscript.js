const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const progressText = document.getElementById('progressText');
const scoreText  = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = []; // HARD CODED QUESTIONS IF NECESSARY
/*{
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
},
{
    question: "Where is Mount Fuji located?",
    choice1: "China",
    choice2: "Japan",
    choice3: "Taiwan",
    choice4: "South Korea",
    answer: 2

},
{
    question: "Which animal except us humans like spicy food?",
        choice1: "The Capybara",
        choice2: "Lemurs",
        choice3: "Tree Shrews",
        choice4: "Kiwi birds",
        answer: 3
}];*/

//JSON
fetch(
    "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
    )
.then(res => {
    return res.json();
})
.then(loadedQuestions => {
    console.log(loadedQuestions.results);
    questions = loadedQuestions.results.map( loadedQuestion => {
        const formattedQuestion = {
            question: loadedQuestion.question
        };
        const answerChoices = [ ... loadedQuestion.incorrect_answers];
        formattedQuestion.answer = Math.floor(Math.random()+3) +1;
        answerChoices.splice(formattedQuestion.answer -1, 0, 
            loadedQuestion.correct_answer);

        answerChoices.forEach((choice, index) => {
            formattedQuestion["choice" + (index+1)] = choice;
        })
        return formattedQuestion;
    });
    
    startGame();

    //questions = loadedQuestions; - for without API
    //startGame(); - for without API
})
.catch( err => {
    console.error(err);
});
//JSON

//CONSTANS
const CORRECT_BONUS = 10;
// const MAX_QUESTIONS = 3 ===== because of the hard code + json
const MAX_QUESTIONS = 10;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
        //console.log(availableQuestions);
        //getNewQuestion();

};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        
        return window.location.assign("/pages/end.html");
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter}/${MAX_QUESTIONS}`;
    //update the progress bar
    //console.log(questionCounter / MAX_QUESTIONS);
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];
        //console.log(selectedAnswer);

        const classToApply = 
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        //console.log(classToApply);

        if (classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        
        setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        //console.log(selectedAnswer == currentQuestion.answer);
        getNewQuestion();
    }, 1000);
    });
});

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

//startGame(); ====== if we don't use JSON / API it needs to be in this spot


//console.log("hello");

