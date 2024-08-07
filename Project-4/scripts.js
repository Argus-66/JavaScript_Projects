const randomNumber = (parseInt(Math.random()*100 + 1));

const submit  = document.querySelector('#Subt')
const userInput  = document.querySelector('#guessField')
const guessSlot  = document.querySelector('.guesses')
const remaining  = document.querySelector('.lastResult')

const lowOrHi  = document.querySelector('.loeOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p')


let prevGuess = []
let numGuess = 1

let playGame = true

if(playGame){
    submit.addEventListener('click', function(){
        e.preventDefault()
        const guess = parseint(userInput.value)
        validateGuess(guess)
    })
}

function validateGuess(guess){

}

function checkGuess(guess){
    if(guess < randomNumber){
        lowOrHi.textContent = 'Too low!'
    } 
    else if(guess > randomNumber){
        lowOrHi.textContent = 'Too high!'
    } 
    else {
        lowOrHi.textContent = 'Congratulations! You guessed correctly!'
        playGame = false
    }
}

function displayGuess(message){
    p.textContent = message
    remaining.appendChild(p)
}

function displayMessage(message){
    p.textContent = message
    startOver.appendChild(p)
}

function endGame(){
    
}

function newGame(){

}

