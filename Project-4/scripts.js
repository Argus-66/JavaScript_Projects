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