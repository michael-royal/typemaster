let isPlaying;
var levels = {
    easy: 10,
    hard: 5,
    god:3
}


 

var currntlevel;
let time;
let score = 0
var timer = document.getElementById('timer')
var tim = document.getElementById('time')
var message = document.getElementById('message')
var output = document.getElementById('wordsOutput')
var inpu = document.getElementById('input')
var scorer = document.getElementById('score')
var header = document.getElementById('header')
var buttons = document.querySelectorAll(".buttons");
var diff = document.getElementById("diff");
var choose = document.getElementById("choose");

            choose.addEventListener("click", () => {
        diff.classList.toggle("can");
      });

      buttons.forEach((button) => {
        button.addEventListener("click", () => {
          currntlevel = button.value
          time = currntlevel
            diff.classList.toggle("can");
            tim.innerHTML = button.value
        });
      });


console.log(levels)
function init(){
   
    showWord()
    inpu.addEventListener('input', startMatch)
    setInterval(countdown, 1000);
    setInterval(checkStatus, 50);
}


function showWord(){
    fetch('words.json').then(res => res.json()).then(data => {
        var rando = Math.floor(Math.random() * data.length)

        output.innerHTML = data[rando].toLowerCase()
    })
}

function countdown(){
    if (time > 0) {
        time--
    }else if(time === 0){
        isPlaying = false
    }
    timer.innerHTML = time
    // console.log(time)

}

function checkStatus() {
    if (!isPlaying && time === 0 ) {
         message.innerHTML = 'Game Over !!!'
         score =  -1
         


    }

        
    
}
// function setHighScore(){
//              if (localStorage.getItem('high') === null) {
//         var highest = scorer.innerHTML

//         localStorage.setItem('high', JSON.stringify(highest))
        
//     }else{
//         localStorage.setItem('high', JSON.stringify(highest))

//     }
// }


function startMatch(){
    if(matchWords()){
        isPlaying = true;
        time = currntlevel;
        inpu.value = ''
        showWord()
        score ++ 
        console.log(score)
    }
    
        if (score === -1) {
            scorer.innerHTML = 0
            
        }else{
            scorer.innerHTML = score

        }
    
}


function matchWords(){
    if(inpu.value === output.innerHTML){
        message.innerHTML = 'Correct !!!'
        return true
    }else{
        message.innerHTML = ''
        return false
    }
}

var cap = document.getElementById('cap')
function skype(){
    setTimeout(() => {
        cap.style.display = 'none'
    }, 10000);
}

skype()
window.addEventListener('load', init)