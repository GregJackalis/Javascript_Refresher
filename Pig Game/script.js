"use strict";

//players
const player0Element = document.querySelector('.player--0')
const player1Element = document.querySelector('.player--1')

// scores
const score0Element = document.getElementById('score--0') // dont need to use a hashtag on .getElementById
const current0Element = document.getElementById('current--0')
const score1Element = document.querySelector('#score--1') // we use the Element word to show that its a dom element
const current1Element = document.getElementById('current--1')

// win message 
const winMessage = document.querySelector('.winMessage')

// dice 
const DiceElement = document.querySelector('.dice')

// buttons 
const BtnNewGame = document.querySelector('.btn--new')
const BtnRollDice = document.querySelector('.btn--roll')
const BtnHold = document.querySelector('.btn--hold')


// Initializing 
DiceElement.classList.add('hidden')
score0Element.textContent = 0
score1Element.textContent = 0

let currentScore = 0
var scores = [0, 0]
let activePlayer = 0;


// Button Events
BtnRollDice.addEventListener('click', () => {
    if (player0Element.classList.contains('player--active')) activePlayer = 0
    if (player1Element.classList.contains('player--active')) activePlayer = 1

    console.log(activePlayer)

    // 1. Generate a ranomd number
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the number, the dice
    DiceElement.classList.remove('hidden')
    DiceElement.setAttribute('src', `img/dice-${dice}.png`) // or DiceElement.src = `img/dice-${dice}.png`

    // 3. Check for rolled 1: if true, switch to player 2
    if (activePlayer === 0) {

        if (dice === 1) {
            player0Element.classList.remove('player--active')
            player1Element.classList.add('player--active')
            currentScore = 0
            current0Element.textContent = currentScore
        } else {
            currentScore += dice
            current0Element.textContent = currentScore
        }
        
    } else if (activePlayer === 1){

        if (dice === 1) {
            player1Element.classList.remove('player--active')
            player0Element.classList.add('player--active')
            currentScore = 0
            current1Element.textContent = currentScore
        } else {
            currentScore += dice
            current1Element.textContent = currentScore
        }
    }

    if (scores[0] >= 100) winMessage.textContent = 'Player 1 wins!';
    if (scores[1] >= 100) winMessage.textContent = 'Player 2 wins!';
})


BtnHold.addEventListener('click', () => {
    if (player0Element.classList.contains('player--active')) activePlayer = 0
    if (player1Element.classList.contains('player--active')) activePlayer = 1

    if (activePlayer === 0) {
        scores[0] = parseInt(score0Element.textContent)
        scores[0] += currentScore
        score0Element.textContent = scores[0]
        player0Element.classList.remove('player--active')
        player1Element.classList.add('player--active')
    } else if (activePlayer === 1) {
        scores[1] = parseInt(score1Element.textContent)
        scores[1] += currentScore
        score1Element.textContent = scores[1]
        player1Element.classList.remove('player--active')
        player0Element.classList.add('player--active')
    }
})


BtnNewGame.addEventListener('click', () => {
    if (scores[0] > scores[1]) winMessage.textContent = 'Player 1 wins!';
    if (scores[1] > scores[0]) winMessage.textContent = 'Player 2 wins!';

    setTimeout(() => {
        winMessage.remove()
        scores = [0, 0]
        player1Element.classList.remove('player--active')
        player0Element.classList.add('player--active')
        current0Element.textContent = 0
        current1Element.textContent = 0
        score0Element.textContent = 0
        score1Element.textContent = 0
    }, 4000);
    
})

if (scores[0] >= 100) winMessage.textContent = 'Player 1 wins!';
if (scores[1] >= 100) winMessage.textContent = 'Player 2 wins!';