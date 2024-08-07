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
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(ifNaN(guess)){
        alert('Invalid input. Please enter a number between 1 and 100.');
    } else if(guess < 1 || guess > 100){
        alert('Invalid input. Please enter a number between 1 and 100.');
    } else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage('You have run out of guesses. The correct number was'+ randomNumber + '. Click "New Game" to start a new game.')
            endGame()
        }
    }
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

