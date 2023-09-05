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


// functions
const clearGame = (playerWon) => {
    if (scores[0] >= 100 || scores[1] >= 100) {
        winMessage.textContent = `Player ${playerWon + 1} wins!`;
    } else {
        winMessage.textContent = `Player ${playerWon + 1} wins!`;
    }

    if (playerWon === 3) {
        winMessage.textContent = `It's a tie!`;
    }

    BtnHold.disabled = true;
    BtnNewGame.disabled = true;
    BtnRollDice.disabled = true;

    setTimeout(() => {
        winMessage.textContent = ''
        scores = [0, 0]
        player1Element.classList.remove('player--active')
        player0Element.classList.add('player--active')
        current0Element.textContent = 0
        current1Element.textContent = 0
        score0Element.textContent = 0
        score1Element.textContent = 0
        BtnHold.disabled = false;
        BtnNewGame.disabled = false;
        BtnRollDice.disabled = false;
        DiceElement.classList.add('hidden')
    }, 4000);
}

const addToScore = (player_active) => {
    if (player_active === 0) {
        scores[0] += currentScore
        score0Element.textContent = scores[0]
        player0Element.classList.remove('player--active')
        player1Element.classList.add('player--active')
        current0Element.textContent = 0
    } else if (player_active === 1) {
        scores[1] += currentScore
        score1Element.textContent = scores[1]
        player1Element.classList.remove('player--active')
        player0Element.classList.add('player--active')
        current1Element.textContent = 0
    }

    if (scores[0] >= 100) {
        clearGame(0)
    } else if (scores[1] >= 100) {
        clearGame(1)
    }
    currentScore = 0;

}

const rollDice = (player_active) => {
    const dice = Math.trunc(Math.random() * 6) + 1;
    DiceElement.classList.remove('hidden')
    DiceElement.setAttribute('src', `img/dice-${dice}.png`)

    if (player_active === 0) {

        if (dice === 1) {
            player0Element.classList.remove('player--active')
            player1Element.classList.add('player--active')
            currentScore = 0
            current0Element.textContent = currentScore
        } else {
            currentScore += dice
            current0Element.textContent = currentScore
        }

    } else if (player_active === 1){

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
}



// if the game is stopped before a player reaches 100 points
BtnNewGame.addEventListener('click', () => {
    if (scores[0] > scores[1]) clearGame(0)
    if (scores[0] < scores[1]) clearGame(1)
    if (scores[0] == scores[1]) clearGame(3)
})



// if it's a player's turn
BtnRollDice.addEventListener('click', () => {
    if (player0Element.classList.contains('player--active')) {
        rollDice(0)
        return;
    }
    if (player1Element.classList.contains('player--active')) rollDice(1)
})



// when the hold button is pressed
BtnHold.addEventListener('click', () => {
    if (player0Element.classList.contains('player--active')) {
        addToScore(0)
        return;
    }  
    if (player1Element.classList.contains('player--active')) addToScore(1)
})
