const highScoresList = document.getElementById('highScoresList');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
.map( score => {
    return `<li class="high-score">${score.name} - ${score.score}</li>`;
})
.join("");
//even better to save this in a database where no one can alter the score