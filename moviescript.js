const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));


let currentQuestion = {}; // object
let acceptingAnswers = false; //for delay before accepting next 
let score = 0;
let questionCounter = 0;
let availableQuestions = []; // Array


// HARD CODED QUESTIONS IF NECESSARY
let questions = [
    // Question number 1
{ 
        question: "'La La Land' filmed Entirely in ?", 

        choice1: "Vancouver", 

        choice2: "London", 

        choice3: "Sydney", 

        choice4: "Stockholm", 

        answer: 1 
}, 
 // Question number 2
{ 
 question: "'Superman' made his first appearance in ?", 

    choice1: "2000", 

    choice2: "1948", 

    choice3: "1900", 

    choice4: "1840", 

    answer: 2 
}, 
 // Question number 3
{ 
    question: "The nickname of Morgan Freeman's character in 'Million Dollar Baby' is .", 

        choice1: "Red", 

        choice2: "Blue", 

        choice3: "Violet", 

        choice4: "Black", 

        answer: 1 

}, 
 // Question number 4
{ 
question: "'Greenberg' is a comedy movie about a middle-aged man trying to overcome his recent nervous breakdown. Who is the lead actor in this film" ,

        choice1: "Owen Wilson", 

        choice2: "Ben Stiller", 

        choice3: "Paul Rudd", 

        choice4: "Hugh Grant", 

        answer: 2 
}, 
 // Question number 5
{ 
question: "Which 2012 Tim Burton movie features Johnny Depp as a vampire with the name of Barnabas Collins? ", 

        choice1: " Dark knight", 

        choice2: "shadow hunter", 

        choice3: " Dark Shadows ", 

        choice4: "Black Penther", 

        answer: 3 
}, 
 // Question number 6
{ 
question: "In this 2011 film, a man takes a drug that allows him to access 100% of his brain. Things do not go his way, however, when he becomes addicted and runs out of drugs. Which film is this?. ", 

        choice1: "Fast", 

        choice2: "Lazy", 

        choice3: "Limitless", 

        choice4: "Worthless", 

        answer: 3 
}, 
 // Question number 7
{ 
question: "Jake Gyllenhaal starred in a 2011 film about a man who relives a train explosion over and over again. What is the film? ", 

        choice1: "Source Code", 

        choice2: "Java Script", 

        choice3: "Dark Code", 

        choice4: "Resource", 

        answer: 1 
}, 
  // Question number 8
{ 
question: "2012 - Guess the movie this quote comes from. Tony: 'Genius, billionaire, playboy, philanthropist'.", 

        choice1: "Deep Blue Sea", 

        choice2: "Dark Knight Rises", 

        choice3: "Notebook", 

        choice4: "Saw", 

        answer: 2 
}, 
 // Question number 9
{ 
question: "Which film, the seventh in its series, grossed more than $1.5 billion, featured several high-speed car chases, and starred Vin Diesel, Paul Walker, and Dwayne Johnson? ", 

        choice1: "Racer", 

        choice2: "Furious 2", 

        choice3: "Cars", 

        choice4: "Furious 7", 

        answer: 4 

}, 
 // Question number 10
{ 
question: " This dramedy about two dysfunctional people who fall in love, in spite of themselves, featured a dance contest and a football wager as major plot points. It also featured a cast of well-respected actors, including Jennifer Lawrence, Bradley Cooper and Robert De Niro. What was the film? ", 

        choice1: " Silver Linings Playbook ", 

        choice2: " Red Linings Playbook ", 

        choice3: " Silver Linings Playland ", 

        choice4: " Silver square Playbook ", 

        answer: 1 
}
];

//CONSTANS
const CORRECT_BONUS = 10;
// const MAX_QUESTIONS = 10 =====
const MAX_QUESTIONS = 10;


startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    //console.log(availableQuestions);
    getNewQuestion();
    game.classList.remove("hidden");
    loader.classList.add("hidden");
       
        

};

getNewQuestion = () => {

    if(availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        
        return window.location.assign("/pages/end.html");
    } //local storage score
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    console.log(questionIndex);
    currentQuestion = availableQuestions[questionIndex];
    //console.log(currentQuestion);
    question.innerText = currentQuestion.question;
    //console.log(currentQuestion.question);

    choices.forEach(choice => {
    const number = choice.dataset['number'];
    //console.log(number);
    choice.innerText = currentQuestion['choice'+ number];
    //console.log( currentQuestion['choice'+number]);
    }); //choice

    availableQuestions.splice(questionIndex, 1); // to remove the question from queue
//console.log(availableQuestions);
    acceptingAnswers = true;
}; //get new question

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        //console.log(e.target);
        if(!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        //console.log(selectedAnswer== currentQuestion.answer);
       
        //through ternary Operator
         //to determine the correct and incorrect answer
        const classToApply =
        selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
        //console.log(currentQuestion.answer);
        //console.log(selectedAnswer);
       

        
/*const classToApply: "InCorrect";
        if (selectedAnswer== currentQuestion.answer)
        { 
            //console.log(selectedAnswer);
            classToApply: "Correct";
      }*/
      //to apply green and color to correct and incorrect answer

      selectedChoice.parentElement.classList.add(classToApply);
      setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        //console.log(selectedAnswer == currentQuestion.answer);
        getNewQuestion();
    }, 1000);
        
    });//choices-eventListeners
});

/*
 

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
} */

//startGame(); ====== if we don't use JSON / API it needs to be in this spot


//console.log("hello");

startGame();

