//Firesbase
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// import {
//   getFirestore,
//   collection,
//   addDoc,
//   doc,
//   deleteDoc,
//   getDocs,
// } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

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
//   const analytics = getAnalytics(app);
var db = firebase.firestore(app);
//console.log(db);

//Importing questions from FireStore
var questions = [];
let isPending = true;

let questionCount = 1;


db.collection("quizQuestions").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    questions.push(doc.data());
  });
  //console.log("01. questions ; ", (questions));
  isPending = false;
});

// sleep time expects milliseconds
function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

// // Usage!
sleep(5000).then(() => {
  // Do something after the sleep!
  console.log("01. isPending ; ", isPending);

  if (isPending == false) {
    console.log("Data loaded successfully ! ");
    show(questions[questionCount - 1]);
  }
  else {
    console.log("Need more time to load data");
  }

});


    if(availableQuestions.length == 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);
        //go to the end page
        
        return window.location.assign("/pages/endtechnology.html");
    }



//Progress Bar
const progressText = document.querySelector('#progressText');
const progressBarFull = document.querySelector("#progressBarFull");
const MAX_QUESTIONS = 5;
const SCORE_POINTS = 50;


let points = 0;

sessionStorage.setItem("points", points);

window.onload = function () {
  show();

};
function next() {

  let index = questionCount - 1;
  // if the question is last then redirect to final page
  if (questionCount == questions.length) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "endtechnology.html";
  }
  console.log("point before : ", points);
  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[index].answer) {
    points += 10;

    console.log("point after ", points);
    sessionStorage.setItem("points", points);
  }





  console.log("user_answer : ", user_answer);
  console.log(" questions[index].answer : ", questions[index].answer);
  // console.log(" points : ", points);


  questionCount++;
  show(questions[questionCount - 1]);
}

function show(singleQuestion) {

  console.log("singleQuestion : ", singleQuestion);

  let question = document.getElementById("questions");
  // let index = questionCount - 1;

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

  progressText.innerText = `Question ${questionCount} of ${MAX_QUESTIONS}`;
  //update the progress bar
  progressBarFull.style.width = `${(questionCount / MAX_QUESTIONS) * 100}%`;


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
