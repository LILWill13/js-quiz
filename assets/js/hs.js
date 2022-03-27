var h1El = document.querySelector('h1');
var score = localStorage.getItem('score');
var initals = document.querySelector('input');
var initalsbtn = document.getElementById('initalsBtn');
var olEl = document.querySelector('ol');
var liEl = document.createElement('li');
var list = [];
var finalScore;
h1El.textContent =  score;
initalsbtn.addEventListener('click', leader);

function leader() {
olEl.appendChild(liEl);
var itls = initals.value;
var finScore = itls + " : " + score;
finalScore = finScore
liEl.textContent = finScore;
leaderboard()
}

function leaderboard() {
let i = list.length - 1;
list[i] = finalScore
console.log(list)
}