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
    window.location.assign("#");
    //console.log(highScores);
};


function popUp()
  {
    Swal.fire({
    position: 'center',
    icon: 'submitted',
    title: 'Submitted',
    showConfirmButton: true,
    timer: 1500
  })
}



