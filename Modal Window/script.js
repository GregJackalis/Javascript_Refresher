"use strict";

//buttons
const BtnShowModal = document.querySelectorAll('.show-modal') // this is like a nodeList/Array that includes all the buttons with this class on our index.html
const BtnCloseModal = document.querySelector('.close-modal') //start with Btn so that it will be easier later in case we
                                                            //we want to seaech for a button

const hiddenMessage = document.querySelector('.modal.hidden')
const overlayDisplay = document.querySelector('.overlay.hidden')

// function to close modal
const closeModal = function () {
    hiddenMessage.style.display = 'none';
    overlayDisplay.style.display = 'none';

     /* we can also use
            hiddenMessage.classList.add('hidden');
            hiddenMessage.classList.add('hidden');
        */
}

// to open modal
Array.from(BtnShowModal).forEach(element => {
    element.addEventListener('click', () => {
        hiddenMessage.style.display = 'block'; 
        overlayDisplay.style.display = 'block';

        /* we can also use
            hiddenMessage.classList.remove('hidden');
            hiddenMessage.classList.remove(hidden');
        */
    })
}); {
}

BtnCloseModal.addEventListener('click', closeModal)
overlayDisplay.addEventListener('click', closeModal)

document.addEventListener('keydown', (e) => { // e stands fo event, meaning the event that is occured when the .addEventListener function is called
    //  console.log(e) // this will print information about the key we press, like an object, and then we will use the code of the key to refer to it and use it inside this .addEventListener 

    // console.log(e.key)

     if (e.key ==='Escape' && hiddenMessage.style.display == 'none') { // or hiddenMessage.classList.contains('hidden')
        alert("Modal is already closed")
     } else if (e.key === 'Escape') closeModal();
})

// Keep in mind that if the othe method is used:
//      hiddenMessage.classList.remove('hidden')
// then the same way we have to add the class and also check with the .contain method 

// WE CANNOT combine both the method of changing the style in the css file and the method of removing
// adding and checking w/ .contains the classes