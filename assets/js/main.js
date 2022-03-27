// tells timer to start countdown as soon as page loads 
window.addEventListener('load', timer)

// questions and answers that will be displayed
const _questions = [
        {
       question: "Which symbol is used for inline-comments in Javascript?",
       rightAnsr: "//",
       wrongAnsr1: "<-- -->",
       wrongAnsr2: "/* */",
       wrongAnsr3: "#"
                 },
        {
        question: "How do you log something to the console?",
        rightAnsr: "console.log",
        wrongAnsr1: "Console.view",
        wrongAnsr2: "//View console",
        wrongAnsr3: "Log.view"
                },
        {   
        question: "[this is in an ?]",
        rightAnsr: "Array",
        wrongAnsr1: "Object",
        wrongAnsr2: "Boolean",
        wrongAnsr3: "Method"
                },
        {
        question: "{this is in an ?}",
        rightAnsr: "Object",
        wrongAnsr1: "Method",
        wrongAnsr2: "Array",
        wrongAnsr3: "Boolean"
                },
        {
        question: "Which method adds new items to the end of an array.",
        rightAnsr: ".push()",
        wrongAnsr1: ".filter()",
        wrongAnsr2: ".map()",
        wrongAnsr3: ".end()"
                },
        {
        question: "what is in index[1] of ['jamie','ben','mike','sarah',]",
        rightAnsr: "ben",
        wrongAnsr1: "mike",
        wrongAnsr2: "jamie",
        wrongAnsr3: "sarah"
                },
        {
        question: "What is a type of loop",
        rightAnsr: "for loop",
        wrongAnsr1: "round loop",
        wrongAnsr2: "aqua loop",
        wrongAnsr3: "five loop"
                },
        {
        question: "what is in index[3] of ['jamie','ben','mike','sarah']",
        rightAnsr: "sarah",
        wrongAnsr1: "jamie",
        wrongAnsr2: "mike",
        wrongAnsr3: "ben"
                },
        {
        question: "What is the purpose of the 'This' operator",
        rightAnsr: "Refers to the object it called within",
        wrongAnsr1: "Always refers to the browser",
        wrongAnsr2: "Refers to the nearest array",
        wrongAnsr3: "Eefers to the nearest function"
                },
        {
        question: "what is not a supported data type",
        rightAnsr: "Trigger",
        wrongAnsr1: "String",
        wrongAnsr2: "Null",
        wrongAnsr3: "Boolean"
                },
]

// sets up all links so js can work with html
var h1El = document.querySelector('h1');
var h2El = document.querySelector('h2');
var pEl = document.querySelector('p');
var ulEl = document.querySelector('ul');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var button3 = document.getElementById('button3');
var button4 = document.getElementById('button4');
var nextbtn = document.getElementById('nextbtn');
var countSeconds = 90;
var questionNumber = 2;
var timer = setInterval(count, 1000);
var score = 1;

button1.addEventListener('click', questionNum);
button1.addEventListener('click',  question);
button1.addEventListener('click',  right);

button2.addEventListener('click', questionNum);
button2.addEventListener('click',  question);
button2.addEventListener('click',  wrong);

button3.addEventListener('click', questionNum);
button3.addEventListener('click',  question);
button3.addEventListener('click',  wrong);

button4.addEventListener('click', questionNum);
button4.addEventListener('click',  question);
button4.addEventListener('click',  wrong);

// resposible for now question and answer choices
function question() {
        h2El.textContent = _questions[0].question
        button1.textContent = _questions[0].rightAnsr
        button2.textContent = _questions[0].wrongAnsr1
        button3.textContent = _questions[0].wrongAnsr2
        button4.textContent = _questions[0].wrongAnsr3
        usedQuestion =_questions.splice(0,1)            
}

// if a choice is clicked calls question function
if(_questions.length > 0 && 'click'){          
        question()    
}

// resposible for the question number in top left 
function questionNum() {
        if(questionNumber <= 10 && 'click') {
        pEl.textContent = 'Question ' + questionNumber++
        } else {
                next()
                store()
        }
};

// responsible for the count down timer when timer is up calls stop function
function count(){
        if(countSeconds >= 1){
            h1El.textContent = countSeconds + ' seconds';
            countSeconds--
             return 
        } 
        if (countSeconds => 0 ){
        h1El.textContent = "Quiz over!!!"
                store()
                stop()
        }
}

// stops timer and calls next function
function stop(){
        clearInterval(timer)
        next()
}
//  subtracts 10 from timer
function wrong(){
        let sub10 = countSeconds - 10
        countSeconds = sub10
}

function right(){
        let add10 =  11 + score
        
         score = add10
}

// hides all elemnts in the page except button to leave page 
function next() {
 h1El.setAttribute('style','display:none')
 h2El.setAttribute('style','display:none')
 pEl.setAttribute('style','display:none')
 ulEl.setAttribute('style','display:none') 
 button1.setAttribute('style','display:none')  
 button2.setAttribute('style','display:none')
 button3.setAttribute('style','display:none') 
 button4.setAttribute('style','display:none') 
 nextbtn.setAttribute('style','font-size: 70px;box-shadow: 0px 0px 20px black;background-color: orange; border: 1.5px solid black')
}

function store(){
      localStorage.setItem('score', score)
}