"use strict";

//buttons
const BtnCloseModal = document.querySelectorAll('.close-modal')

const BtnSignUp = document.querySelector('#BtnSignUp')
const BtnShowSignUp = document.querySelector('#signUp')

const BtnShowLogin = document.querySelector('#login')
const BtnLogIn = document.querySelector('#BtnLogin')

const BtnShowContact = document.querySelector('#emailUs')


const firstWindow = document.querySelector('#firstWindow')
const secondWindow = document.querySelector('#secondWindow')
const thirdWindow = document.querySelector('#thirdWindow')
const signUpMessage = document.querySelector('#signUpMessage')
const loginMessage = document.querySelector('#loginMessage')
const overlayDisplay = document.querySelector('.overlay.hidden')

// fields
const emailInput = document.querySelector('#emailInput')
const passwordInput = document.querySelector('#passwordInput')

// function to close modal
const closeModal = function () {
    firstWindow.style.display = 'none';
    secondWindow.style.display = 'none';
    thirdWindow.style.display = 'none';
    overlayDisplay.style.display = 'none';
    signUpMessage.style.display = 'none';
    loginMessage.style.display = 'none';
    emailInput.value = '';
    passwordInput.value = '';
}

BtnShowSignUp.addEventListener('click', () => {
    firstWindow.style.display = 'block'; 
    overlayDisplay.style.display = 'block';
})

Array.from(BtnCloseModal).forEach(element => {
    element.addEventListener('click', closeModal)
})

overlayDisplay.addEventListener('click', closeModal)

BtnSignUp.addEventListener('click', () => {
    signUpMessage.style.display = 'block';
    emailInput.value = '';
    passwordInput.value = '';
})

BtnShowLogin.addEventListener('click', () => {
    secondWindow.style.display = 'block';
    overlayDisplay.style.display = 'block';
})

BtnLogIn.addEventListener('click', () => {
    loginMessage.style.display = 'block';
})

BtnShowContact.addEventListener('click', () => {
    thirdWindow.style.display = 'block';
    overlayDisplay.style.display = 'block';
})

document.addEventListener('keydown', (e) => { 

     if (e.key ==='Escape' && firstWindow.style.display == 'none') { 
        alert("Modal is already closed")
     } else if (e.key === 'Escape') closeModal();
})
