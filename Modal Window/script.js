"use strict";

//buttons
const BtnShowModal = document.querySelectorAll('.show-modal')
const BtnCloseModal = document.querySelectorAll('.close-modal')
const BtnSignUp = document.querySelector('#BtnSignUp')


const hiddenModal = document.querySelector('.modal.hidden')
const hiddenMessage = document.querySelector('#messageModal')
const overlayDisplay = document.querySelector('.overlay.hidden')

// fields
const emailInput = document.querySelector('#emailInput')
const passwordInput = document.querySelector('#passwordInput')

// function to close modal
const closeModal = function () {
    hiddenModal.style.display = 'none';
    overlayDisplay.style.display = 'none';
    hiddenMessage.style.display = 'none';
    emailInput.value = '';
    passwordInput.value = '';
}

// to open modal
Array.from(BtnShowModal).forEach(element => {
    element.addEventListener('click', () => {
        hiddenModal.style.display = 'block'; 
        overlayDisplay.style.display = 'block';
    })
}); {
}

Array.from(BtnCloseModal).forEach(element => {
    element.addEventListener('click', () => {
        hiddenModal.style.display = 'none';
        overlayDisplay.style.display = 'none';
        hiddenMessage.style.display = 'none';
        emailInput.value = '';
        passwordInput.value = '';
    })
})

overlayDisplay.addEventListener('click', closeModal)

BtnSignUp.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    emailInput.value = '';
    passwordInput.value = '';
})

document.addEventListener('keydown', (e) => { 

     if (e.key ==='Escape' && hiddenModal.style.display == 'none') { 
        alert("Modal is already closed")
     } else if (e.key === 'Escape') closeModal();
})
