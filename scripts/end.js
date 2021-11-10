const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;
//console.log(highScores);
//console.log(JSON.parse(localStorage.getItem("highScores")));
finalScore.innerText = mostRecentScore;



username.addEventListener("keyup", () => {
   // console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});


saveHighScore = e => {
    //console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score:mostRecentScore,
        //score: Math.floor(Math.random(mostRecentScore)*100),
        name: username.value,
        
        
    };

    highScores.push(score);
    console.log(score);
    highScores.sort( (a,b) => b.score - a.score);
    //Sorted array, return function
    highScores.splice(5);


    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign("/index.html");
    //console.log(highScores);
};

// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
//   import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-analytics.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
//   // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//   const firebaseConfig = {
//     apiKey: "AIzaSyBLYTA8fYp_hkN1my_rOhd6lvYqjm-diQQ",
//     authDomain: "iass-quiz-project-e3af3.firebaseapp.com",
//     databaseURL: "https://iass-quiz-project-e3af3-default-rtdb.firebaseio.com",
//     projectId: "iass-quiz-project-e3af3",
//     storageBucket: "iass-quiz-project-e3af3.appspot.com",
//     messagingSenderId: "851253967048",
//     appId: "1:851253967048:web:e7401c98724ec59e314dfd",
//     measurementId: "G-1KR4GYNJSE"
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const analytics = getAnalytics(app);
// //Add to firebase
// var firebaseRef = firebase.database().ref(mostRecentScore)
// const x = username.value;
// const y = mostRecentScore;
// firebaseRef.push(x);
// firebaseRef.push(y);
