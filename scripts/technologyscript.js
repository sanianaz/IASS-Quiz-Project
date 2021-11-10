const firebaseConfig = {
  apiKey: "AIzaSyD7fyHoEfbBF3FDuGeeklrNUKs9uWcfkXo",
  authDomain: "technologyquiz-a7ac3.firebaseapp.com",
  projectId: "technologyquiz-a7ac3",
  storageBucket: "technologyquiz-a7ac3.appspot.com",
  messagingSenderId: "217503801848",
  appId: "1:217503801848:web:852d6377c545f386d1360d",
  measurementId: "G-0YDTPX9TSC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
var db = firebase.firestore(app);

//Importing questions from FireStore
var questionsCollection = [];
let questionCount = 1;
let maxQuestions = 0;

db.collection("quizQuestions").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    questionsCollection.push(doc.data());
  });
  startQuiz();
});

function startQuiz() {
  maxQuestions = questionsCollection.length;
  document.getElementById("loadMsg").style.display = "none";
  document.getElementById("quizForm").style.display = "block";
  show(questionsCollection[questionCount - 1]);
}

//Progress Bar
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector("#progressBarFull");
let points = 0;

sessionStorage.setItem("points", points);

window.onload = function () {
  document.getElementById("quizForm").style.display = "none";
};

function next() {
  let index = questionCount - 1;
  // if the question is last then redirect to final page
  if (questionCount == questionsCollection.length) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "endtechnology.html";
  }
  let user_answer = document.querySelector("li.option.active").innerHTML;

  // check if the answer is right or wrong
  if (user_answer == questionsCollection[index].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }

  questionCount++;
  show(questionsCollection[questionCount - 1]);
}

function show(singleQuestion) {
  let question = document.getElementById("questions");

  let first = singleQuestion.option01;
  let second = singleQuestion.option02;
  let third = singleQuestion.option03;
  let fourth = singleQuestion.option04;

  question.innerHTML = `
  <h2>Q${questionCount}. ${singleQuestion.question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;

  toggleActive();

  progressText.innerText = `Question ${questionCount} of ${maxQuestions}`;
  //update the progress bar
  progressBarFull.style.width = `${(questionCount / maxQuestions) * 100}%`;
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
