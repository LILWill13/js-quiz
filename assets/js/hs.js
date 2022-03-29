var highScores = JSON.parse(localStorage.getItem('highScores')) || [];

var olEl = document.querySelector('ol');


olEl.innerHTML = highScores.map(score => {
        return `<li>${score.name}-${score.score}</li>`
     })
     .join('');


