"use strict";

//buttons
const BtnShowModal = document.querySelectorAll('.show-modal') // this is like a nodeList/Array that includes all the buttons with this class on our index.html
const BtnCloseModal = document.querySelectorAll('.close-modal') //start with Btn so that it will be easier later in case we
                                                            //we want to seaech for a button
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

     /* we can also use
            hiddenModal.classList.add('hidden');
            hiddenModal.classList.add('hidden');
        */
}

// to open modal
Array.from(BtnShowModal).forEach(element => {
    element.addEventListener('click', () => {
        hiddenModal.style.display = 'block'; 
        overlayDisplay.style.display = 'block';

        /* we can also use
            hiddenModal.classList.remove('hidden');
            hiddenModal.classList.remove(hidden');
        */
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

// BtnCloseModal.addEventListener('click', closeModal)
overlayDisplay.addEventListener('click', closeModal)

BtnSignUp.addEventListener('click', () => {
    hiddenMessage.style.display = 'block';
    emailInput.value = '';
    passwordInput.value = '';
})

document.addEventListener('keydown', (e) => { // e stands fo event, meaning the event that is occured when the .addEventListener function is called
    //  console.log(e) // this will print information about the key we press, like an object, and then we will use the code of the key to refer to it and use it inside this .addEventListener 

    // console.log(e.key)

     if (e.key ==='Escape' && hiddenModal.style.display == 'none') { // or hiddenModal.classList.contains('hidden')
        alert("Modal is already closed")
     } else if (e.key === 'Escape') closeModal();
})

// Keep in mind that if the othe method is used:
//      hiddenModal.classList.remove('hidden')
// then the same way we have to add the class and also check with the .contain method 

// WE CANNOT combine both the method of changing the style in the css file and the method of removing
// adding and checking w/ .contains the classes